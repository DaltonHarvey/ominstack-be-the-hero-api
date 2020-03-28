const express = require('express');

const app = require('./src/bootStrap/App');

const dotenv = require('dotenv').config();

const { PORT } = process.env;

app.listen(PORT);
