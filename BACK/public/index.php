<?php
require '../vendor/autoload.php';
require '../config/bootstrap.php';

use \Firebase\JWT\JWT;

$app = new \Slim\App;

const JWT_SECRET = "BrigitteMacronIsASolidFiveOutOfSeven";

// $jwt = new \Slim\Middleware\JwtAuthentication([
// 	"path" => "/api",
// 	"secure" => false,
// 	"secret" => JWT_SECRET,
// 	"passthrough" => ["/signin"],
// 	"attribute" => "decoded_token_data",
// 	"algorithm" => ["HS256"],
// 	"error" => function ($response, $arguments) {
// 		$data = array('ERREUR' => 'ERREUR', 'ERREUR' => 'JWTAUTO');
// 		return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
// 	}
// ]);

// $app->add($jwt);

//Enable lazy CORS
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});
$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            // ->withHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});


// To check JWT before accessing route : /api/..

// ROUTES
// __clients__
$app->get('/clients', 'getClients');
$app->post('/api/client', 'addClient');
$app->get('/api/client/{id}', 'getClient');
$app->patch('/api/client/{id}', 'updateClient');
$app->delete('/api/client/{id}', 'deleteClient');
// __login__
$app->post('/signin', 'signin');
// __register__
$app->post('/signup', 'signup');
// __products__
$app->get('/api/produits', 'getProduits');
$app->get('/api/produit/{id}', 'getProduit');
// __order__
$app->post('/api/order', 'placeOrder');

// WORKING
// Test request, returns all clients in the database
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

	return $response->withHeader("Content-Type", "application/json")->write($ret);
}

// WORKING
// Returns the client corresponding to the id parameter
function getClient($request, $response, $args)
{
	$id = $args['id'];

	global $entityManager;
	
	$client = $entityManager->find('Users', $id);

	if ($client === null) {
		echo "No client found.\n";
		exit(1);
	}

	$ret = "{'data': [\n";
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
	$ret .= "]}";

	return $response->withHeader("Content-Type", "application/json")->write($ret);
}

// WORKING
// Add a client to the database 
function addClient($request, $response)
{
	global $entityManager;
	$client = new Users();
	$body = $request->getParsedBody();

	$client->setEmail($body['email']);
	$client->setLogin($body['login']);
	$client->setPassword(md5($body['password']));// Password is md5 hashed
	$client->setFirstname($body['firstName']);
	$client->setLastname($body['lastName']);
	$client->setAddress($body['address']);
	$client->setPostcode($body['postCode']);
	$client->setCity($body['city']);
	$client->setCountry($body['country']);
	if (isset($body['phone'])) { //phone can be NULL
		$client->setPhone($body['phone']);
	}
	$date = new \DateTime('now');
	$client->setRegisterdate($date->format('Y-m-d H:i:s'));

	$entityManager->persist($client);

	try {
		$entityManager->flush();
		echo "Created client with ID " . $client->getId() . "\n";
	} catch(\Exception $e){
		echo($e->getMessage());
		exit(1);
	}

	return $response->withHeader("Content-Type", "application/json")->write("");
}

//NOT WORKING
//Update the client corresponding to the id parameter
function updateClient($request, $response, $args)
{
	global $entityManager;
	$id = $args['id'];
	$client = $entityManager->find('Users', $id);
	$body = $request->getParsedBody();

	if ($client === null) {
		echo "No client found.\n";
		exit(1);
	}else{
		try {
			if (isset($body['email'])){
				$client->setEmail($body['email']);
			}
			if (isset($body['address'])){
				$client->setAddress($body['address']);
			}
			if (isset($body['postCode'])){
				$client->setPostcode($body['postCode']);
			}
			if (isset($body['city'])){
				$client->setCity($body['city']);
			}
			if (isset($body['country'])){
				$client->setCountry($body['country']);
			}
			if (isset($body['phone'])) {
				$client->setPhone($body['phone']);
			}
			$entityManager->flush();
			echo "Client with id ". $id ." updated\n";
		} catch(\Exception $e){
			echo($e->getMessage());
			exit(1);
		}
	}
	return $response->withHeader("Content-Type", "application/json")->write("");
}

//WORKING
//Delete the client corresponding to the id parameter
function deleteClient($request, $response, $args)
{
	global $entityManager;
	$id = $args['id'];
	$client = $entityManager->find('Users', $id);

	if ($client === null) {
		echo "No client found.\n";
		exit(1);
	}else{
		try {
			$entityManager->remove($client);
			$entityManager->flush();
			echo "Client with id ". $id ." removed\n";
		} catch(\Exception $e){
			echo($e->getMessage());
			exit(1);
		}
	}

	return $response->withHeader("Content-Type", "application/json")->write("");
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
		return $response->withHeader("Content-Type", "application/json")->withStatus(401);
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
