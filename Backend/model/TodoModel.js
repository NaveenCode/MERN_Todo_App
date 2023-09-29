const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
}, { timestamps: true });

const TODO = mongoose.model('TODO', todoSchema);

module.exports = TODO;
