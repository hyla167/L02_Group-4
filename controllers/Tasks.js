const Task = require('../model/Task');
const Staff = require('../model/Staff')
class TaskController {
    // [GET] /task
    index(req, res, next) {
        Task.find({})
            .then(tasks => res.render('task.ejs', {
                tasks: tasks,
                text: 'Dashboard'
            }))
            .catch(error => next(error));
    }

    add(req, res) {
        const formBody = req.body;
        formBody.status = "Chưa diễn ra";
        const task = new Task(formBody);
        task.save();
        res.redirect('/task');
    }

    edit(req, res, next) {
        Task.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('back'))
            .catch(next)
    }

    delete(req, res, next) {
        Task.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    getDetail(req, res, next) {
        Promise.all([Task.findById(req.params.id), Staff.find({})])
        .then(([tasks, staffs]) => {
            res.render('detailTask', {
                tasks: tasks,
                staffs: staffs,
                text: 'Detail Task'
            })
        })
        .catch(next)
    }
}

/* const renderTask = async (req, res, next) => {
    Task.find({})
            .then(tasks => res.render('task.ejs', {
                tasks: tasks,
                text: 'Dashboard'
            }))
            .catch(error => next(error));
}

const renderNewTask = async (req, res) => {
    const formBody = req.body;
    formBody.status = "Chưa diễn ra";
    const task = new Task(formBody);
    task.save();
    res.redirect('/task');
}

const updateTask = async (req, res, next) => {
    Task.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('back'))
        .catch(next)
}

const deleteTask = async (req, res, next) => {
    Task.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
}

const getDetailTask = async (req, res, next) => {
    Task.findById(req.params.id)
        .then((tasks) => res.render('detailTask', {
            tasks: tasks,
            text: 'Detail Task'
        }))
        .catch(next)
} */

/* module.exports = {
    renderTask,
    renderNewTask,
    updateTask,
    deleteTask,
    getDetailTask,
} */

module.exports = new TaskController;