import Router from 'express';
import helloController from '../controllers/HelloController';
import userController from '../controllers/UsersController';

const routes = Router();

routes.get('/', helloController.helloWorld);
routes.get('/users', userController.allUsers);
routes.post('/users', userController.createUser);


export default routes;


