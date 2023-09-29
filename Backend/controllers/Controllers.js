const TODO = require('../model/TodoModel');

const sendTodo = async (req, res) => {
    try {
        const { text } = req.body
        const toDo = new TODO({ text });
        await toDo.save();
        res.send(toDo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error })
    }
}

const getTodo = async (req, res) => {
    try {
        const Todo = await TODO.find()
        res.send(Todo)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
}
const updateTodo = async (req, res) => {
    const { id } = req.params
    try {
        const { text } = req.body
        const updatedTodo = await TODO.findByIdAndUpdate(id, { text }, { new: true })
        res.status(200).json(updatedTodo)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
}
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        await TODO.findByIdAndDelete(id)
        res.status(200).json({ message: "successfully deleted" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error })
    }
}

module.exports = { sendTodo, getTodo, updateTodo, deleteTodo }