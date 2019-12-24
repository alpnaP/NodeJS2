var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = require('mongodb://localhost:27017/mytasklist_robot');

router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });

});

module.exports = router;