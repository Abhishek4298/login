const express = require('express');
const app = express();

const adminRoutes = require('./admin');

app.use('',adminRoutes);

module.exports = app;