
runQuery = require('./schemaQuery').runQuery;

let database = 'webcredits';
function createDatabase(){
    return new Promise((resolve, reject)=>{
        runQuery(` create database if not exists ${database}; `).then((result)=>{
            console.log(result);
            resolve();
        }).catch((error)=>{ throw error}) ;
    });
}

function createTableProduct(){
    return new Promise((resolve, reject)=>{
        runQuery(` create table if not exists ${database}.products 
        (idproduct int not null auto_increment, primary key (idproduct),
        name varchar(40), price varchar(20)); `).then((result)=>{
            console.log(result);
            resolve();
        }).catch((error)=>{ throw error})
    });
}

function createTableUser(){
    return new Promise((resolve, reject)=>{
        runQuery(` create table if not exists ${database}.users 
        (iduser int not null auto_increment, primary key (iduser), name varchar(50), username varchar(30), 
        password varchar(200), email varchar(100), type tinyint); `).then((result)=>{
            console.log(result);
            resolve();
        }).catch((error)=>{ throw error});
    });
}


function createTableBill(){
    return new Promise((resolve, reject)=>{
        runQuery(` create table if not exists ${database}.bills 
        (idbill int, idproduct int , iduser int  ,typesales tinyint, client varchar(30), 
        datesales varchar(20), clientdirection varchar(10)); `).then((result)=>{
            console.log(result);
            resolve();
        }).catch((error)=>{ throw error});
    });
}

function runAllQuerys(){
    return new Promise((resolve, reject)=>{
       createDatabase()
       .then(createTableUser)
       .then(createTableProduct)
       .then(createTableBill);
    });
}
module.exports = {
    run: runAllQuerys 
}


