const express = require('express')

const router = express.Router()

const {
    getAllTask, createTask, getTask, updateTask, deleteTask 
} = require('../controller/task')

// router.route('/').get(getAllTask).post(createTask)
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

//
router.get('/', getAllTask)
router.post('/', createTask)
router.get('/:id', getTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router