import { Router } from 'express';
import * as Controller from '../controller/client.controller';

const router = Router();

router.route("/")
.get(Controller.getAll)
.post(Controller.postClient)
.delete(Controller.deleteAll);

router.route("/:id")
.get(Controller.getByID)
.put(Controller.putClient)
.delete(Controller.deleteByID);

export default router;