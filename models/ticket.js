const mongoose = require('mongoose');

// Ticket tracker Schema
let ticketSchema = mongoose.Schema({
          ticketNumber: {
                    type: String,
                    required: true
          },
          priority: {
                    type: String,
                    required: true
          },
          category: {
                    type: String,
                    required: true
          },
          comments: {
                    type: String
          }
});

module.exports = mongoose.model('TicketTracker', ticketSchema, 'TicketTracker');