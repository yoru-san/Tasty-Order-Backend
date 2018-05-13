# Serveur NodeJS de l'application Tasty-Order
Réalisé par Céline BERTAUD et Logan LE LAY en B2.

### Fonctionnement
Ecoute sur le port 8080.
Il comporte trois sous-dossiers :
 ⋅⋅* le dossier api : contient les models, controllers et routes correspondant à l'API.
 ⋅⋅* le dossier backoffice : correspond aux interfaces en cuisine et l'affichage des commandes prêtes à être servies.
  ⋅⋅* le dossier dump : inclut un schéma de base de donnée toute prête à restaurer avec *mongorestore* à condition d'avoir une base du même nom déjà crée: > mongorestore -d tasty-order dump/tasty-order

Vous trouverez aussi le cahier des charges réalisé par nos soins avec la documentation de l'API.