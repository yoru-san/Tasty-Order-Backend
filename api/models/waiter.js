const mongoose = require('mongoose');

exports.Waiter = mongoose.model('Waiter', { 
    name: { type: String, required: true }
});