import { Router } from 'express';
import * as Controller from '../controller/client.controller';

const router = Router();

router.route("/")
.get(Controller.getAll)
.post(Controller.post)
.delete(Controller.deleteAll);

router.route("/:id")
.get(Controller.getByID)
.put(Controller.put)
.delete(Controller.deleteByID);

router.route("/:clientid")
.get(Controller.getByID)
.put(Controller.put)
.delete(Controller.deleteByID);

router.route("/:clientid/:productid")
.get(Controller.getByID)
.put(Controller.put)
.delete(Controller.deleteByID);

export default router;