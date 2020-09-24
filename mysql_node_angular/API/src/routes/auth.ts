import {Router} from 'express';
import AuthController from '../controller/AuthController';
import { checkJwt } from '../middlewares/jwt';

const router = Router();

// LOGIN
router.post('/login',AuthController.login);

// CAMBIO DE PASSWORD
router.post('/change-password',[checkJwt], AuthController.changePassword);

export default router;