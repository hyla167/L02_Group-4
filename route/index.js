const homepageRouter = require('./homepage')
const loginRouter = require('./login')
const staffRouter = require('./staff')
const taskRouter = require('./task')

function route(app) {
    app.use('/staff', staffRouter);
    app.use('/task', taskRouter)
    app.use('/home-page', homepageRouter);
    app.use('/', loginRouter);
}

module.exports = route;