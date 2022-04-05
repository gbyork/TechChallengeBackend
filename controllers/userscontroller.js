let User = require("../models/UserSchema");

exports.get_users = function (req, res) {
    Animal.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.render('users/todos', { users: data });
        }
    })
}

exports.get_create_users = function (req, res) {
    res.render('users/create');
}

exports.post_users = function (req, res) {

    let newUser = new User({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Title: req.body.Title,
        Email: req.body.Email,
        Message:req.body.Message
    });

    newUser.save(function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            // saved!
            res.render('users/creation');
        }
    });
}

    