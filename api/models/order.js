const mongoose = require('mongoose');
const ObjectId = require('mongoose').Schema.Types.ObjectId;

exports.Order = mongoose.model('Order', { 
    tableNumber: { type: Number, required: true },
    waiter: { type: ObjectId, ref: 'Waiter', required: true },
    totalPrice: { type: Number, required: true },
    prepared: { type: Boolean, required: true },
    items: [{ type: ObjectId, ref: 'Course' }]
});