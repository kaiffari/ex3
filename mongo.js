const mongoose = require('mongoose');
/* pakotetaan uudet ominaisuudet, jotta ei tule deprecation varoituksia */
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

const url =  process.env.REMINDERDB_URI;
console.log('url: ', url);

mongoose.connect(url)
  .then(() => {
    console.log('connected to ReminderDB')
  })
  .catch((error) => {
    console.log('error connecting to ReminderDB:', error.message)
  })

/* define model and schema in one statement, note that "Reminder" creates collection "reminders" by convention */
const reminderSchema = new mongoose.Schema({
  name: String,
  timestamp: Date,
  important: Boolean
})

reminderSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Reminder = mongoose.model('Reminder', reminderSchema)

module.exports = Reminder
  /* module.exports = mongoose.model('Reminder', reminderSchema)*/