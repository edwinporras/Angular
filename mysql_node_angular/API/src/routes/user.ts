import { Router } from 'express';
import { UserController } from './../controller/UserController';
import { useContainer } from 'typeorm';
import { checkJwt } from './../middlewares/jwt';
import { checkRole } from './../middlewares/role';

const router =Router();

// GET all users
router.get('/',  UserController.getAll);

// GET one users
router.get('/:id',  UserController.getById);

// Create new user
router.post('/',   UserController.newUser);

// Edit user
router.patch('/:id',  UserController.editUser);

// Delete
router.delete('/:id',  UserController.deleteUser);

export default router;
