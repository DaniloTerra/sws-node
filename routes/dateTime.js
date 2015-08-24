var express = require('express');
var router  = express.Router();
var moment  = require('moment-timezone');
//var tz      = require('moment-timezone')

router.get('/', function(req, res) {
	//var data = moment().format();

	//data = data.tz('America/Sao_Paulo').format();

	var data = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss');

	res.json({ dateTime: data});
});

module.exports = router;