const Collector = require('../model/Collector');

const homepage = async (req, res, next) => {
    Collector.find({})
            .then(collectors => res.render('index.ejs', {
                collectors: collectors,
                text: 'Home Page'
            }))
            .catch(error => next(error));
    // res.render('index.ejs', {text: 'Home Page'})
}

module.exports = homepage;