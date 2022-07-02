import mongoose from "mongoose";
var schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    
})

const Todos = mongoose.model('tododb', schema);

export default Todos;




/**
const Schema = mongoose.Schema;

// Create schema for todo
const TodoSchema = new Schema({
    todo: {
        type: String,
        required: [true, 'The todo text field is required']
    }
})

// Create model for Todo
const Todos = mongoose.model('todo', TodoSchema);

export default Todos;
 */