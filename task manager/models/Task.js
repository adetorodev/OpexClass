const mongoose = require('mongoose')

const TaskSChema = new mongoose.Schema({
    name: {type: String, require: [true, 'Must provide name'], trim: true, maxlength: 20},
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSChema)