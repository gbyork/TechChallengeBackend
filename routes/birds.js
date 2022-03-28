var express = require('express');
var router = express.Router();
var axios = require('axios');



router.get('/', function(req, res, next) {
  axios.get('https://jsonplaceholder.typicode.com/todos/')
  .then(function (response){
      
  
  res.render('./birds/todos',{todos: response.data});
  })
});

router.get('/create', function(req, res, next) {
    
    res.render('./birds/create');
    
  });


  router.get('/creation', function(req, res, next) {
    
    res.render('./birds/creation');
    
  });

router.post('/create', function(req, res, next) {
    //process data/save to db
    console.log("made it!");
    console.log(req.body.species);
    console.log(req.body.nickname);
    console.log(req.body.status);
    res.redirect('./creation');
  });  

module.exports = router;