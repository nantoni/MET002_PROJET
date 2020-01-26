# PROJET

## Cahier des charges

- boutique en ligne
- front end: Angular 
- back end: php, composer, doctrine, slim

- page d'accueil (hello sup ?)
- gestion des clients (nouveau compte-reactive forms, connexion, déconnexion, session, bdd)
- catalogue des produits
- recherche (??? à définir) filtrer les produits selon plusieurs critères 
- panier / paiment -> paiment juste un bouton commander -> votre commande a été validé et enlever les items du stock
- responsive design 
- validation des formulaires (directive + pipe) 
- lazy loading 
- store 


## Routes 

__clients__
post:/api/client
get:/api/client/{id}
patch:/api/client/{id}
delete:/api/client/{id}

__connection__
post:/signin 

__inscription__
post:/signup 

__produits__
get:/api/produits
get:/api/produit/{id}

__order__
post:/api/order

## ORM 


__Génération du fichier de mapping__
php vendor/bin/doctrine orm:convert-mapping --namespace="" --force --from-database yml ./config/yaml

__Génération des classes entités__
php vendor/bin/doctrine orm:generate-entities --generate-annotations=false --update-entities=true --generate-methods=false ./src

__Mise à jour du schéma__
php vendor/bin/doctrine orm:schema-tool:update

__Validation du Schéma__
php vendor/bin/doctrine orm:validate-schema

__Vidage du cache__
php vendor/bin/doctrine orm:clear-cache:metadata
