var express = require('express');
var router = express.Router();
var axios = require('axios');
const userscontroller = require('../controllers/userscontroller');


router.get('/', function(req, res, next) {
  axios.get('https://jsonplaceholder.typicode.com/todos/')
  .then(function (response){
      
  
  res.render('./users/todos',{todos: response.data});
  })
});

router.get('/', userscontroller.get_users);

router.get('/create', userscontroller.get_create_users);
router.post('/create', userscontroller.post_users)


module.exports = router;
