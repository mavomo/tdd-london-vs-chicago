# TDD London vs Chicago

Customisation (exposition d'APIs + ajout swagger )du kata Tax computation kata.

Initialement publié ici: https://github.com/k1ngp0ng/impots-entreprise-kata

kata réalisée en utilisant Nest.js : https://docs.nestjs.com/

##Pre-requis 
 Vous devez avoir NPM installé sur votre poste
 
 Vérifiez la version `$ npm -v`
 
 Vous devez avoir quelque chose dans le genre :
 
 `5.6.0`
 
## Deploiement de l'application: 
`npm run start`

## Execution des test 
`npm run test`

Pour qu'ils s'exécutent automatiquement après chaque modification
`npm run test:watch`

puis aller sur `http://localhost:3000/api/`

## Tax computation kata

Le ministère des finances vous demande de créer un programme devant permettre de
calculer les impôts dus par les entreprises françaises.


Dans un premier temps, ce programme devra gérer 2 types d'entreprise :
* Les auto-entreprises, qui ont les propriétés suivantes :
   * N° SIRET
   * Dénomination

* Les SAS, qui ont les propriétés suivantes :
   * N° SIRET
   * Dénomination
   * Adresse du siège social

Le programme sera étendu par la suite avec d'autres types d'entreprise (SASU, SARL ...)
Par ailleurs, le calcul des impôts devra respecter les règles de gestion suivantes :

Pour les auto-entreprises :
* impôts = 25% du CA annuel de l'entreprise

Pour les SAS :
* impôts = 33% du CA annuel de l'entreprise

Note : le CA de l'entreprise sera fourni au service par la classe de test et il n'est pas
nécessaire de l'inclure dans les propriétés des entreprises.
