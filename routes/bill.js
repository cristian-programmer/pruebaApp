var app = require('express');
var router = app.Router();
let query = require('../bin/db/schemaQuery').runQuery;

let newBill = {
    idbill: undefined,
    idproduct: undefined,
    client: undefined,
    iduser: undefined,
    typesale: undefined,
    datesale: undefined,
    addressclient: undefined
};


let database = 'webcredits';


router.get('/', (req, res, next) => {
    res.render('/', {title: 'Facturacion'});
});

router.post('/createBill', (req, res) => {
  query(` insert into ${database}.bills `, (req, res, next) =>{

  });
});


router.post('', () =>{

});

module.exports = router;