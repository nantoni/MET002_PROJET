<?php
require '../vendor/autoload.php';
require '../config/bootstrap.php';

use \Firebase\JWT\JWT;

$app = new \Slim\App;

const JWT_SECRET = "BrigitteMacronIsASolidFiveOutOfSeven";

$jwt = new \Slim\Middleware\JwtAuthentication([
	"path" => "/api",
	"secure" => false,
	"secret" => JWT_SECRET,
	"passthrough" => ["/signin"],
	"attribute" => "decoded_token_data",
	"algorithm" => ["HS256"],
	"error" => function ($response, $arguments) {
		$data = array('ERREUR' => 'ERREUR', 'ERREUR' => 'JWTAUTO');
		return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
	}
]);

$app->add($jwt);

//Enable lazy CORS
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});
$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});


// ROUTES
// client 
$app->get('/api/client/{id}', 'getClient');
$app->post('/api/client', 'addClient');
$app->put('/api/client/{id}', 'updateClient');
$app->delete('/api/client/{id}', 'deleteClient');
// authentication
$app->post('/signin', 'signin');
// produit
$app->get('/api/produits', 'getProduits');
$app->get('/api/produit/{id}', 'getProduit');

$app->get('/clients', 'getClients');



function getClients($request, $response, $args)
{
	global $entityManager;
	
	$clientRepository = $entityManager->getRepository('Users');
	$clients = $clientRepository->findAll();

	$ret = "{'data': [\n";
	foreach ($clients as $client){
		$ret .= "{'id': '" . $client->getId() 
			. "', 'email': '" . $client->getEmail() 
			. "', 'login': '" . $client->getLogin() 
			. "', 'firstName': '" . $client->getFirstName() 
			. "', 'lastName': '" . $client->getLastName() 
			. "', 'address': '" . $client->getAddress() 
			. "', 'postCode': '" . $client->getPostcode() 
			. "', 'city': '" . $client->getCity() 
			. "', 'country': '" . $client->getCountry() 
			. "', 'phone': '" . $client->getPhone() 
			. "', 'registerDate': '" . $client->getRegisterDate() 
			. "'},\n";
	}
	$ret .= "]}";
	
	return $response->write($ret);
}



function getClient($request, $response, $args)
{
	$id = $args['id'];
	// RECHERCHE
	// ...
	return $response->write(json_encode('{"a":"b"}'));

	// return $response->write (json_encode($client));
}

function addClient($request, $response, $args)
{
	$body = $request->getParsedBody();

	return $response->withHeader("Content-Type", "application/json")->withJson($body);
}

function addLivre($request, $response, $args)
{
	$body = $request->getParsedBody();
	// Parse le body
	$nom = $body['nom']; // Data du formulaire
	// AJOUT
	// ...
	return $response->write("");
}

function updateClient($request, $response, $args)
{
	$id = $args['id'];
	$body = $request->getParsedBody();
	$nom = $body['firstname'];
	// Mise a jour
	// ...
	return $response->write("");
}

function deleteClient($request, $response, $args)
{
	$id = $args['id'];
	// Suppression
	// ...
	return $response->write("");
}

function signin($request, $response, $args)
{
	$userid = "emma";
	$name = "emma";
	$email = "emma@emma.fr";
	$password = "emma";

	$body = $request->getParsedBody();

	// If the parameters sent match the test user return JWT 
	if ($body['email'] == $email && $body['password'] == $password){
		$issuedAt = time();
		$expirationTime = $issuedAt + 60; // jwt valid for 60 seconds from the issued time
		$payload = array(
			'userid' => $userid,
			'iat' => $issuedAt,
			'exp' => $expirationTime
		);
		$token_jwt = JWT::encode($payload, JWT_SECRET, "HS256");
		$response = $response->withHeader("Authorization", "Bearer {$token_jwt}")->withHeader("Content-Type", "application/json");
		$data = array('first_name' => $name, 'email' => $email);
		return $response->withHeader("Content-Type", "application/json")->withJson($data);
	}	
	// Otherwise return error 401
	else {
		return $response->withStatus(401);
	}

}

function getProduits($request, $response, $args)
{
	// $path = storage_path("test-data.json");
	// $json = file_get_contents($path); 
}

function getProduit($request, $response, $args)
{ }

// Start app
$app->run();
