<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once "../vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/yaml"), $isDevMode);
$conn = array(
    'url' => 'mysql://projet_web_b_4084:8oBuSA-B8nRsQEege1Hg@bd6c43a0-bb4f-4ab1-84c7-d15b181d2b55.projet-web-b-4084.mysql.dbs.scalingo.com:33742/projet_web_b_4084?useSSL=true&verifyServerCertificate=false',
);
$entityManager = EntityManager::create($conn, $config);