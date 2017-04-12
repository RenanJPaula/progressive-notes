#!/bin/bash

git clone https://github.com/RenanJPaula/progressive-notes.git /app
cd /app/web

npm install
gulp build

pm2 start ./bin/www.js --no-daemon
