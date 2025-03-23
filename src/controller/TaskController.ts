import taskModel from '../models/TaskModel'

const getAll = async (_req, res) => {
    const listTask = await taskModel.getAll()
    return res.status(200).json(listTask)
}

const getById = async (req, res) => {
    const task = await taskModel.getById(req.params.id)
    return res.status(200).json(task)
}

const createTask = async (req, res) => {
    const task = await taskModel.createTask(req.body)
    return res.status(200).json(task)
}

const editTask = async (req, res) => {
    const task = await taskModel.editTask(req.params.id, req.body)
    return res.status(200).json(task)
}

const deleteTask = async (req, res) => {
    const task = await taskModel.deleteTask(req.params.id)
    return res.status(200).json(task)
}

export default {
    getAll, getById, createTask, editTask, deleteTask
}
