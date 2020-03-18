var http = require('http');
var qlikauth = require('qlik-auth');
http.createServer(function (req, res){
	
	//Definir diretorio usuario, identidade e atributos
	var profile = {
		'UserDirectory': 'QLIKSRV',
		'UserId': 'pedro',
		'Attributes': [{'Group': 'ExampleGroup'}]
	}
	
	//Certificado Exportado
	var options = {
		'Certificate': './client.pfx',
		'PassPhrase': ''
	}

	//Fazer chamada por ticket quando Node.js e Qlik estão no mesmo servidor
	//qlikauth.requestTicket(req, res, profile);

	//Fazer chamada por ticket quando Node.js e Qlik estão em servidores diferentes
	qlikauth.requestTicket(req, res, profile, options);

	}).listen(1337, '0.0.0.0')

	console.log('Server running at http://localhost:1337/')