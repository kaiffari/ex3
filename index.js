const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Reminder = require('./models/reminderM')

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('build'))  /* näin get hakee build/static kansiosta index.html */
app.use(express.json())

const requestLogger = (req, res, next) => {
  console.log('Backend Method:', req.method)
  console.log('Path:  ', req.path)
  console.log('Body:  ', req.body)
  console.log('---')
  next()
}
app.use(requestLogger)
  
  app.post('/api/reminders', (req, res, next) => {  /* https://thawing-bayou-48463.herokuapp.com voi jättää pois, tarvitaan paikallisen testaamiseen?*/
    const body = req.body
    console.log('posting...')
  
    if ((body.name === undefined) || (body.name === '') || (body.timestamp === undefined)) {
      return res.status(400).json({error: 'content missing'})
    }

    /* create new reminder */
          const reminder = new Reminder({
            name: body.name,
            timestamp: body.timestamp,
            important: body.important
          })
    /* write reminder to collection */
      reminder
        .save()
        .then(savedReminder => {
          console.log('reminder saved:', savedReminder._id)
          res.json(savedReminder._id)
        })
        .catch(error => {
          console.log('Error: ', error.message)
          next(error)
        })
  })

  app.put('/api/reminders/:id', (req, res) => {
    const body = req.body
  
    const reminder = {
      name: body.name,
      timestamp: body.timestamp,
      important: body.important
    }
  
    console.log('putting...')

    Reminder
      .findByIdAndUpdate(req.params.id, reminder, { new: true } )
      .then(updatedReminder => {

        if (updatedReminder) {
          res.json(updatedReminder)
        } else {
          console.log('Not found: ', req.params.id)
          res.status(404).end()
        }
      })
      .catch(error => {
        console.log(error)
        res.status(400).send({ error: 'malformatted id' })
      })
  })
  
  app.get('/api/reminders', (req, res) => {
    console.log('Backend - get all')
    Reminder.find({}).then(reminders => {
      console.log('get all res: ', reminders.length),
      res.json(reminders)
    })
    .catch((error) => {
      console.log('error getting all reminders:', error.message)
    })
  })

  app.get('/api/reminders/:id', (req, res, next) => {
    Reminder.findById(req.params.id)
      .then (reminders => {
        if (reminders) {
          res.json(reminders)
        } else {
          console.log('Not found: ', req.params.id)
          res.status(404).end()
        }
      })
      .catch(error => {
        console.log(error)
        res.status(400).send({ error: 'malformatted id' })
        next(error)
      })
  })
  
  app.delete('/api/reminders/:id', (req, res) => {
    Reminder
    .findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()   // no more detailed error handler since always returns 204
    })
    .catch(error => {
      res.status(400).send({ error: 'malformatted id' })
    })
  })

  const unknownEndpoint = (req, res) => {
    console.log('Backend - unknown endpoint')
    res.status(404).send({ error: 'unknown endpoint' })
  }
  app.use(unknownEndpoint)

  /*const PORT = 3001*/
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
