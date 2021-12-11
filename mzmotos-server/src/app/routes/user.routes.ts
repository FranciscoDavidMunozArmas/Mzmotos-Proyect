import { Router } from 'express';
import * as UserController from '../controller/user.controller';

const router = Router();

router.route("/")
    .get(UserController.getUsers)
    .delete(UserController.deleteUsers);

router.route("/signin")
    .post(UserController.signup);

router.route("/:id")
    .get(UserController.getUser)
    .delete(UserController.deleteUser);

export default router;