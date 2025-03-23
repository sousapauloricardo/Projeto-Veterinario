import connection from "./Connection";

const getAll = async () => {
    const [task] = await connection.execute('SELECT * FROM Task')
    return task
}

const getById = async (id) => {
    const [task] = await connection.execute(`SELECT * FROM Task WHERE TaskId = ${id}`)
    return task
}

const createTask = async (task) => {
    const query = 'INSERT INTO Task (TaskTarefa, TaskDescricao) VALUES (?,?)'
    const created = connection.execute(query,[task.TaskTarefa,task.TaskDescricao])
    return created
}

const editTask = async (id,task) => {
    const query = 'UPDATE Task SET TaskTarefa = ?, TaskDescricao = ? WHERE TaskId = ?'
    const edited = connection.execute(query,[task.TaskTarefa,task.TaskDescricao,id])
    return edited
}

const deleteTask = async(id) => {
    const query = `DELETE FROM Task WHERE TaskId = ${id}`
    const deleted = connection.execute(query)
    return deleted
}

export default{
    getAll, getById, createTask, editTask, deleteTask
}