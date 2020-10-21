const routes = require('express').Router();
const routeController = require('../controllers/connectionController')

routes.get('/', routeController.getIndex);
routes.get('/StaffMember', routeController.getStaffMember);




module.exports = routes;



