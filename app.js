var express = require ("express");
var app = express();
var mongo = require("mongodb");
var assert = require("assert");
var fs = require('fs');

var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
   
     if(err) throw err;

     //Write databse Insert/Update/Query code here..
                
});

var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
    
    db.collection('Persons', function (err, collection) {
        
        collection.insert({ id: 1, firstName: 'Frank', lastName: 'Stevens' });
        collection.insert({ id: 2, firstName: 'Pascal', lastName: 'Ibu' });
        collection.insert({ id: 3, firstName: 'James', lastName: 'Amidu' });
        
        

        db.collection('Persons').count(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
    });
                
});
