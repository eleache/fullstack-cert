#!/bin/bash
# genera la estructura de este proyecto
npm init -y;
mkdir backend frontend;
mkdir backend/models backend/routes;
touch backend/index.js backend/database.js;
npm i express mongoose morgan multer cors cross-env dotenv fs-extra;
npm i nodemon -D; # lo instala como dependencia de desarrollo

touch .gitignore .env;
echo node_modules > .gitignore;
echo .env > .gitignore;
echo 'instala mongodb y postman para probarlo de manera local !!'

# frontend modules /frontend/.
npm i webpack webpack-cli html-webpack-plugin css-loader style-loader mini-css-extract-plugin webpack-dev-server timeago.js -D;


# 
### mira, es facil perderse o frustrarse entre tanta tecnologia, e informacion que un desarrollador debe tener en su mente. 
### claro que si eres humano, igual que yo, pero que ambiciona ser grande entre los grandes. lo que te recomiendo primero es obtener contexto.
### Esto implica profundizar en el -porque- de las cosas. Imagina que un dia llueve oro, pero solo puedes conservar lo que puedas cargar, querras un recipiente lo mas grande que se pueda.
###  una vez que se abre la mente a nuevas ideas, no hay retorno. 
###  cuando tengas el recipiente adecuado, ahora si llenate de fundamentos, es decir, si quieres construir el edificio mas grande del mundo, debes hacer los cimientos mas solidos del mundo.
###  si refuerzas suficiente las bases de tu conocimiento. podras llegar lejos en el dominio de las tecnologias que estan por venir. cualquiera sentira abrumado por la complejidad de la nueva generacion de tecnologias.
###  pero de algun lado se le tuvieron que ocurrir a esos cientificos locos que operan en alto secreto en los rincones mas ocultos del mundo. y por eso nosotros no nos preocupamos. despues de todo, a donde sea que quieran llegar,
###  llegaremos. porque seguimos siendo humanos. preocupate mas por aquel que no entre en esta definicion (es broma).
###  cumpliras tus sueños.
### happy hacking. 