import { Router } from 'express';
import * as UserController from '../controller/user.controller';

const router = Router();

router.route("/")
    .get(UserController.getUsers)
    .post(UserController.postUser)
    .delete(UserController.deleteUsers);

router.route("/access")
    .post(UserController.allowAccess);

router.route("/:id")
    .get(UserController.getUser)
    .put(UserController.putUser)
    .delete(UserController.deleteUser);

export default router;