const express = require('express');
const { sendTodo, getTodo, updateTodo, deleteTodo } = require('../controllers/Controllers');
const router = express.Router();

router.route('/todo').post(sendTodo);
router.route('/todo').get(getTodo)
router.put('/todo/:id', updateTodo)
router.delete('/todo/:id', deleteTodo)

module.exports = router