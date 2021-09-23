#!/bin/bash
# 
#          author: eleache
# este script crea mi entorno de desarrollo habitual, luego crea la esctructura del proyecto desde el directorio hasta llamar los modulos;
#
sudo apt-get update -y && sudo apt-get full-upgrade -y;
sudo apt-get install nodejs npm;
# wget https://az764295.vo.msecnd.net/stable/3866c3553be8b268c8a7f8c0482c0c0177aa8bfa/code_1.59.1-1629375198_amd64.deb
sudo dpkg -i *.deb;
mkdir backend frontend;
touch backend/index.js backend/database,j;

npm i express mongoose morgan multer dotenv cross-env fs-extra cors;
npm i nodemon -D;
cd backend; mkdir models public routes;

# frontend 
# npm i webpack webpack-cli html-webpack-plugin css-loader style-loader mini-css-extract-plugin webpack-dev-server timeago.js;