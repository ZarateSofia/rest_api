var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Suppliers = require('../models').suppliers;

router.get('/findAll', function(req, res, next) {
    res.send("GET All")
});
router.get('/findById/:id', function(req, res, next) {
    res.send("GET By Id")
});
router.post('/save', function(req, res, next) { 
    res.send("POST")
});
router.put('/update/:id', function(req, res, next) { 
    res.send("PUT")
});  
router.delete('/delete/:id', function(req, res, next) { 
    res.send("DELETE")
});

module.exports = router;