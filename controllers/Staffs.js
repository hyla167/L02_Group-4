/* const getStaffInfo = async (req, res) => {
    res.render('staffInfo', {text: 'Staff'})
}

module.exports = getStaffInfo; */

const Staff = require('../model/Staff');

class StaffController {
    // [GET] /task
    index(req, res, next) {
        Staff.find({})
            .then(staffs => res.render('staffInfo.ejs', {
                staffs: staffs,
                text: 'Staff'
            }))
            .catch(error => next(error));
    }

    getDetail(req, res, next) {
        Staff.findById({_id:req.params.id})
            .then(staffs => res.render('viewStaff.ejs',  {
                staffs: staffs,
                text: 'View profile'
            }))
            .catch(error => next(error));
    }

    edit(req, res, next) {
        Staff.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('back'))
            .catch(next)
    }

    delete(req, res, next) {
        Staff.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new StaffController;