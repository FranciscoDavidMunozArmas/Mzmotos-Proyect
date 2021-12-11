import { Router } from 'express';
import * as UserController from '../controller/user.controller';

const router = Router();

router.route("/")
    .get(UserController.getUsers)
    .delete(UserController.deleteUsers);

router.route("/signin")
    .post(UserController.signin);

router.route("/:id")
    .get(UserController.getUserById)
    .delete(UserController.deleteUserById);

export default router;