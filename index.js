const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

let reminders = [
    {
      name: "Buy some eggs",
      timestamp: "2021-11-10T13:00:00.141Z",
      id: 1
    },
    {
      name: "Make an omelette",
      timestamp: "2021-11-11T08:00:00.141Z",
      id: 2
    },
    {
      name: "Wash dishes",
      timestamp: "2021-11-11T09:00:00.000Z",
      id: 3
    },
    {
      name: "Buy more eggs",
      timestamp: "2021-11-11T13:00:00.000Z",
      id: 4
    }
  ]

  app.use(bodyParser.json())
  app.use(cors())
  app.use(express.static('build'))  /* näin get hakee build/static kansiosta index.html */


  const generateId = () => {
    const maxId = Number(reminders.length > 0 ? reminders.map(r => r.id).sort((a,b) => a - b).reverse()[0] : 1)
    var newId
    /* varmistetaan ettei sattumaltakaan tule päällekkäisiä indeksejä */
    do {
        newId = Math.floor(Math.random() * 1000000000000)
    } while (newId == maxId);
    return newId
    /*return maxId + 1*/
  }
  
  app.post('/api/reminders', (request, response) => {
    const body = request.body
    console.log(body)
  
    if ((body.name === undefined) || (body.timestamp === undefined)) {
      return response.status(400).json({error: 'content missing'})
    }
    /* prevent duplicates 
    var pos = this.props.reminders.findIndex(o => o.name === this.state.newReminder)*/
    var pos = reminders.findIndex(o => o.name === body.name)
    if (pos == -1) {
        const reminder = {
            name: body.name,
            timestamp: body.timestamp,
            id: generateId()
        }
        reminders = reminders.concat(reminder)
        response.json(reminder)
      } else {
        return response.status(400).json({error: 'Name must be unique!'})
      }
  })

  app.get('/', (req, res) => {
    res.send('<h1>Hello World, Yo!</h1>')
  })
  
  app.get('/api/reminders', (req, res) => {
    res.json(reminders)
  })

  app.get('/api/reminders/:id', (request, response) => {
    const id = Number(request.params.id)
    const reminder = reminders.find(reminder => {
        /*console.log(reminder.id, typeof reminder.id, id, typeof id, reminder.id === id)*/
        return reminder.id === id 
    })
    if ( reminder ) {
        response.json(reminder)
      } else {
        response.status(404).end()
      }  
  })
  
  app.delete('/api/reminders/:id', (request, response) => {
    const id = Number(request.params.id)
    reminders = reminders.filter(r => r.id !== id)
    response.status(204).end()
  })
        
  /*const PORT = 3001*/
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })