const mongoose = require('mongoose');

exports.Course = mongoose.model('Course', { 
    name: { type: String, required: true },
    prix: { type: Number, required: true },
    type: { type: String, required: true },
    disponibility: { type: Boolean, required: true },
    
    
});