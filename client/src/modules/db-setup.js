'use strict';

const db = require('./models');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {});

module.exports = db;