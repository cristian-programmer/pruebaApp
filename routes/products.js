var app = require('express');
var router = app.Router();
let query = require('../bin/db/schemaQuery').runQuery;

let newProduct = {
    name: undefined,
    price: undefined,
    quantity: undefined
}


let database = 'webcredits';


router.get('/', (req, res, next) =>{
    res.render('products', { title: 'products'});
});


router.post('/createProduct', (req, res, next) => {
    
    newProduct.name = req.body.name;
    newProduct.price = req.body.price;
    newProduct.quantity = req.body.quantity;

    query(` insert into ${database}.products (name, price) values
     ('${newProduct.name}', '${newProduct.price}'); `)
    .then((result)=>{
        console.log(result);
        res.json({state: 'save'});
    }).catch(error => { if(error) throw error});
});

router.post('/deleteProduct', (req, res, next) => {
    iddelete = req.body.id;
    query(` delete from ${database}.products where idproduct='${iddelete}' ;`)
    .then( (result) => {
      console.log(result);
      res.json({state: 'delete'});
    }).catch(error => { throw error});
});


router.get('/getProducts', (req ,res) =>{
    query(` select * from ${database}.products;`)
    .then( (result) => {
      console.log(result);
      res.json(result);
    }).catch(error => { throw error});
  });
  
  
module.exports = router; 