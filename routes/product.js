var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/:id([0-9]{5})/:name',function(req,res){
  res.send('The id you specified is '+req.params.id+ " and name is " +req.params.name);
})
router.post('/product',function(req,res){
  res.send('Product Post')
})
router.put('/product',function(req,res){
  res.send('Product Put ')
})
router.delete('/product',function(req,res){
  res.send('Product Delete ')
})
//this here is used as an error if the id is not equal to 5 length then this will be executed
router.get('*',function(req,res){
    res.send('Wrong URL')                         

  })
module.exports = router;
