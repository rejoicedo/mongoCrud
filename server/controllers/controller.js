import Todos from "../model/model.js";


// Create and save new task
const createTask = (req, res) => {
    // Validate request
    if(!req.body) {
        res.status(400).send({ message: "Content cannot be empty"});
        return;
    }

    // new task
    const task = new Todos ({
        title: req.body.title,
        description: req.body.description
    })

    // save task in the db
    task
    .save(task)
    .then(data=> {
        res.send(data)
    }) .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while connecting to the db"
        });
    });
}

// retrieve and return all users / retrieve and return a single user
const findTask = (req, res) => {
    Taskdb.find().then(user => {
        res.send(user)
    }) .catch(err => {
        res.status(500).send({message: err.message || "Error occured while retrieving user info"})
    })
}

// Update a newe identified task by task id
const updateTask = (req, res) => {

}

// Delete a task with a specified user id in the request
const _deleteTask = (req, res) => {
    
}

export {createTask, findTask, updateTask, _deleteTask}


