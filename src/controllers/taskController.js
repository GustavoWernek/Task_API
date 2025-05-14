const {Task} = require ('../models');

//get all tasks

exports.getAll = async (req,res)=>{
    const tasks = await Task.findAll();
    res.json(task);
}; 

//POST new task
exports.create = async (req,res) => {
    const {nome, descricao} = req.body;
    const task = await Task.create ({nome, descricao})
    res.status(201).json(task);
};

//PUT update task
exports.update = async (req,res) => {
    const {id} = req.params;
    const {nome,descricao} = req.body;
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({error: "Task not found"})
    await task.update({nome, descricao});
    res.json(task);
}

//DELETE task
exports.remove = async (req,res) => {
const {id} = req.params;
const task = await Task.findByPk(id);
if (!task) return res.status(404).json({error: "Task not found"})
await task.destroy();
res.json({message:"Task deleted"});
}
