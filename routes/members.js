const router = require('express').Router();
const memberController = require('../controllers/memberController');

//I have separated the concerned routes that match a specific URL. 
//For example, routes that are starting with :id routing parameter 
//are defined above together in the file. 


router
    .route('/')
    .get(memberController.findAll)
    .post(memberController.create);



module.exports = router;