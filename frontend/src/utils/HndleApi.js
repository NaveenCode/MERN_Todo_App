import axios from 'axios';
const URL = 'http://localhost:5000/todo'

const getAllTodo = async (setTodo) => {
    await axios.get(URL).then((res) => res.data)
        .then((data) => setTodo(data))
        .catch((err) => console.log(err))
}
const addTodo = async (text, setText, setTodo) => {
    await axios.post(URL, { text })
        .then((res) => res.data)
        .then(() => getAllTodo(setTodo))
        .then(() => setText(''))
        .catch((err) => console.log(err))
}
const updateTodo = async (text, setText, setIsUpdating, setTodo, todoId) => {
    await axios.put(`${URL}/${todoId}`, { text })
        .then((data) => {
            setText('')
            setIsUpdating(false)
            getAllTodo(setTodo)
        }
        )
        .catch((err) => console.log(err))
}
const deleteTodo = async (id, setTodo) => {
    await axios.delete(`${URL}/${id}`)
        .then((data) => {
            getAllTodo(setTodo)
        })
}

export { getAllTodo, addTodo, updateTodo, deleteTodo }