var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/save', function(req, res, next) { 
  let {SupplierName, ContactName, Address, City, PostalCode, Country, Phone} = req.body;
        
    Suppliers.create({
        SupplierName: SupplierName, 
        ContactName: ContactName, 
        Address: Address, 
        City: City, 
        PostalCode: PostalCode, 
        Country: Country, 
        Phone: Phone
    })
    .then(data => {  
      res.json(data);  
  })  
  .catch(error => res.status(400).send(error)) 
});

router.get('/findById/:id', function(req, res, next) {

  let id = parseInt(req.params.id);

  Suppliers.findOne({  
      where: { 
        [Op.and]: [
          {SupplierID: id}
        ]
      }
  })  
  .then(data => {  
      res.json(data);  
  })  
  .catch(error => res.status(400).send(error)) 
});

router.get('/findAll/json', function(req, res, next) {
  Users.findAll({  
  })  
  .then(users => {  
      res.json(users);  
  })  
  .catch(error => res.status(400).send(error)) 
});

router.put('/update', function(req, res, next) {  

  let {id, email, username, password} = req.body;
      
  Users.update({
    email: email,
    username: username,
    password: password,
    logins: 0,
    last_login: 0
  },
  {
      where: {
        id: parseInt(id)
      }
  })
  .then(users => {  
    res.json(users);  
})  
.catch(error => res.status(400).send(error)) 
});

router.delete('/delete/:id', function(req, res, next) {  

  let id = parseInt(req.params.id);
      
  Users.destroy({
    where: { 
      id: id
    }
  })
  .then(users => {  
  res.json(users);  
})  
.catch(error => res.status(400).send(error)) 
});


module.exports = router;
