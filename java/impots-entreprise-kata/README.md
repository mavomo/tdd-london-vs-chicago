# TDD London vs Chicago

Customisation (exposition d'APIs + ajout swagger )du kata Tax computation kata.

Initialement publié ici: https://github.com/k1ngp0ng/impots-entreprise-kata

##Pre-requis 
 Vous devez avoir Maven installé sur votre poste
 
 Vérifiez la version `$ mvn -v`
 
 Vous devez avoir quelque chose dans le genre :
 
 `Apache Maven 3.5.4 (1edded0938998edf8bf061f1ceb3cfdeccf443fe; 2018-06-17T20:33:14+02:00)`
 
 `Maven home: C:\ProgramData\chocolatey\lib\maven\apache-maven-3.5.4\bin\..`
 

## Deploiement de l'application: 
`mvn clean spring-boot:run`

puis aller sur `localhost:8080`

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
