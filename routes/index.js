const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/customers', controllers.createCustomer)

router.get('/customers', controllers.getAllCustomers);

router.get('/customers/:id', controllers.getCustomerById);

router.put('/customers/:id', controllers.updateCustomer);

router.delete('/customers/:id', controllers.deleteCustomer);

module.exports = router
