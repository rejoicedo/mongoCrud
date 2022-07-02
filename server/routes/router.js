import express, { Router } from "express";
import Todo from "../model/model.js";
const route = express.Router(); // This allows us to create different router in a certain file

import { createTask, findTask, updateTask, _deleteTask } from "../controllers/controller.js";

route.get('/', (req, res) => { 
    // res.send("Start your Todo Task");
    res.render("index"); 
});    // res.send("Todo List application"); Not used because we are rendering an HTML file

route.get('/add-task', (req, res) => {   res.render("add_task"); });

route.get('/update-task', (req, res) => { res.render("update_task"); });


// API
route.post('/api/tasks', createTask);
route.get('/api/tasks', findTask);
route.put('/api/tasks/:id', updateTask);
route.delete('/api/tasks/:id', _deleteTask);


export default route;















// Get all Todo Task

/**
//route.get('/', (req, res) => res.send("See all Users"));
route.get('/', async (req, res) => {
    // This will return all the data
    try {
        const todos = await Todo.find({}, 'todo')
        if(!todos) {
            return res.status(400).json({
                success: false,
                message: 'Todos not retrieved',
                todos: []
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Todos retrieved successfully',
            todos: todos
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
});

// Create Todo Task
route.post('/add-task', async (req, res) => {
    try {
        const { todo } = req.body
        const todos = await Todo.create({todo})
        if (!todos) {
            return res.status(400).json({
                success: false,
                message: "Problem creating Todo",
                todo: null
            })
        }
        return res.status(200).json({
            success: true,
            message: "Successfully created Todo",
            todo: todos
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
})

// Update a Todo Task
route.patch('/update-task/:id', async(req, res) => {
    try {
        const { todo } = req.body
        const update = await Todo.findOneAndUpdate({_id: req.params.id}, {todo})
        if(!update) {
            return res.status(400).json({
                success: false,
                message: "Not successfully updated"
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Todo successfullly updated'
        })
    } catch(error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
})

// Delete a ToDo Task
route.delete('/delete-task/:id', async (req, res) => {
    try {
        const deleteTodo = await Todo.findOneAndDelete({_id: req.params.id})
        if (!deleteTodo) {
            return res.status(400).json({
                success: false,
                message: 'Todo not deleted'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Todo successfully deleted'
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
})
*/
