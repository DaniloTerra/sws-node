var express = require('express');
var router  = express.Router();
var request = require('request');

router.get('/:cep', function(req, res) {
	request.get('http://viacep.com.br/ws/'+req.params.cep+'/json', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			res.send(body);
		} else {
			res.send('Houve uma falha na requisição. Verifique se o CEP informado realmente existe.');
		}
	});
});

module.exports = router;