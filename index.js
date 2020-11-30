const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const ticketRouter = require('./routes/ticket');

// Init App
const app = express();

mongoose.connect(`mongodb+srv://bairi:bairi@123@c4ctickettracker.jeorq.mongodb.net/Ticket?retryWrites=true&w=majority`, { useNewUrlParser: true }, { useMongoClient: true });
let db = mongoose.connection;

//Check Connection
db.once('open', () => console.log('Connected to DB...'));

//Check DB errors
db.on('error', err => console.log(`DB Connection Error-> ${err}`));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Router middleware
app.use('/', ticketRouter);

app.listen(3000, () => {
          console.log('Server started at http://localhost:3000');
});