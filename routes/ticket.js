const express = require('express');
const ticketRouter = express.Router();
const Ticket = require('../models/ticket');

// Add ticket - POST
ticketRouter.post('/addTicket', async (req, res) => {
    const ticket = new Ticket({
        ticketNumber: req.body.ticketNumber,
        priority: req.body.priority,
        category: req.body.category,
        comments: req.body.comments
    });
    try {
        const savedTicket = await ticket.save();
        res.json(savedTicket);
    } catch (e) {
        res.json(e);
    }

});

// Get all tickets - GET
ticketRouter.get('/listTickets', async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (e) {
        res.json(e);
    }
});

// Get ticket by ID - GET
ticketRouter.get('/:ticketId', async (req, res) => {
    try {
        const ticketId = req.params.ticketId;
        const ticket = await Ticket.find().where({ ticketNumber: ticketId });
        res.json(ticket);
    } catch (e) {
        res.json(e);
    }
});

// Delete ticket - DELETE
ticketRouter.delete('/:ticketId', async (req, res) => {
    try {
        const deletedTicket = await Ticket.remove({ ticketNumber: req.params.ticketId });
        res.json(deletedTicket);
    } catch (e) {
        res.json(e);
    }

});

// Update ticket - PUT
ticketRouter.put('/:ticketId', async (req, res) => {
    try {
        const updatedTicket = await Ticket.updateOne(
            { ticketNumber: req.params.ticketId }, // condition
            {
                $set: {
                    ticketNumber: req.body.ticketNumber, // new data
                    priority: req.body.priority,
                    category: req.body.category,
                    comments: req.body.comments
                }
            }
        );
        res.json(updatedTicket);
    } catch (e) {
        res.json(e);
    }


});

module.exports = ticketRouter;