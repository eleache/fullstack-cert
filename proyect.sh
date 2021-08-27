#!/bin/bash
# genera la estructura de este proyecto
npm init -y;
mkdir backend frontend;
mkdir backend/models backend/routes;
touch backend/index.js backend/database.js;
npm i express mongoose morgan multer cors cross-env dotenv fs-extra;
npm i nodemon -D;
