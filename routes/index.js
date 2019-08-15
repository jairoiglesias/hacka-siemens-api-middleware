var express = require('express');
var router = express.Router();
const superagent = require('superagent');

let statusMachines = [
  {
    id: 1,
    machineName: 'Modelo J',
    machineStatus: [
      {name: 'valvula X', valor: 15},
      {name: 'valvula Y', valor: 30},
      {name: 'motor A', valor: 40}
    ],
    statusTotal: 85
  },
  {
    id: 2,
    machineName: 'Modelo L',
    machineStatus: [
      {name: 'valvula X', valor: 20},
      {name: 'valvula Y', valor: 40},
      {name: 'motor A', valor: 20}
    ],
    statusTotal: 80
  },
  {
    id: 3,
    machineName: 'Modelo M',
    machineStatus: [
      {name: 'valvula X', valor: 13},
      {name: 'valvula Y', valor: 56},
      {name: 'motor A', valor: 16}
    ],
    statusTotal: 85
  },
  {
    id: 4,
    machineName: 'Modelo N',
    machineStatus: [
      {name: 'valvula X', valor: 15},
      {name: 'valvula Y', valor: 45},
      {name: 'motor A', valor: 22}
    ],
    statusTotal: 72
  },
  {
    id: 5,
    machineName: 'Modelo O',
    machineStatus: [
      {name: 'valvula X', valor: 20},
      {name: 'valvula Y', valor: 10},
      {name: 'motor A', valor: 60}
    ],
    statusTotal: 90
  },
  {
    id: 6,
    machineName: 'Modelo P',
    machineStatus: [
      {name: 'valvula X', valor: 35},
      {name: 'valvula Y', valor: 31},
      {name: 'motor A', valor: 27}
    ],
    statusTotal: 93
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/appapi/test', function(req, res, next) {
  res.send("Hi, it's MindSphere");
});

router.get('/superagent', (req, res) => {

  superagent.get('https://hacka-siemens-api-middleware.herokuapp.com/appapi/test').then(response => {

    // res.send("123 "+ response.text)
    res.status(200).json(statusMachines)

  })
})


module.exports = router;
