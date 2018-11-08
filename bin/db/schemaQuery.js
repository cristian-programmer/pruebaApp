con = require('./connection').con;

function runQuery(query){
    return new Promise((resolve, reject)=>{
            con.query(query, (error, result)=>{
                if (error) reject(error);
                resolve(result);
            });
    });
}

module.exports = {
    runQuery: runQuery
};