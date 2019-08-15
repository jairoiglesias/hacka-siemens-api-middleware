var express = require('express');
var router = express.Router();
const superagent = require('superagent');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/appapi/test', function(req, res, next) {
  res.send("Hi, it's MindSphere");
});

router.get('/superagent', (req, res) => {

  superagent.get('https://hacka-siemens-api-middleware.herokuapp.com/appapi/test').then(response => {

    res.send("123 "+ response.text)

  })
})


module.exports = router;
