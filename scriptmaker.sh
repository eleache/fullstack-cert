#!/bin/bash
###################################################
#         author: eleache
# este script configura mi entorno de desarrollo habitual, 
# luego crea la estructura del proyecto, y da una nocion
# de las acciones realizadas mediante CLI.
#
############################################# Backend
# wget https://az764295.vo.msecnd.net/stable/3866c3553be8b268c8a7f8c0482c0c0177aa8bfa/code_1.59.1-1629375198_amd64.deb
# sudo dpkg -i *.deb;
sudo apt-get update -y && sudo apt-get full-upgrade -y;
sudo apt-get install nodejs -y ; # o descarga del sitio nodejs.org 
mkdir backend frontend;
npm init -y;
npm i express mongoose morgan multer dotenv cross-env fs-extra cors;
npm i nodemon -D;
cd backend; mkdir models public routes; touch index.js database.js;
############################################# Frontend 
# npm i webpack webpack-cli html-webpack-plugin css-loader style-loader mini-css-extract-plugin webpack-dev-server timeago.js;

