const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo: todo 
}   