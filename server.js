const express = require("express");
const app = express();
const methodOverride = require('method-override') // convert post to put in server
const port = 3000;
const bodyparser = require("body-parser");

// const path = require('path');
const session = require("express-session");
const route = require("./route/index");
const router = require("./route/login_route");
// Import model Collector
const Staff = require('./model/Staff')
const Task = require('./model/Task')
// const MCP = require('./model/MCP')

// Connect DB
const db = require('./config/db')
db.connect();

// body-parser is used to pass the incoming request in the middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


// allow to use ejs 
app.set('view engine', 'ejs') 

// allow access folder public
app.use(express.static(__dirname)); 

// include route
app.use('/login', router);


// override with POST having ?_method=PUT
app.use(methodOverride('_method'))

/* app.put('/staff/:id', (req, res, next) => {
    Staff.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('back'))
        .catch(next)
})
app.delete('/staff/:id', (req, res, next) => {
    Staff.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
}) */

app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true
}))

route(app);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})