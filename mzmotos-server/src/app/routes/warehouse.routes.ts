import { Router } from 'express';
import * as Controller from '../controller/client.controller';

const router = Router();

router.route("/")
.get(authUser, Controller.getSalesmen)
.post(Controller.createSalesman)
.delete(authUser, Controller.deleteSalesmen);

router.route("/one/:id")
.get(authUser, Controller.getSalesmanByID)
.put(authUser, Controller.updateSalesman)
.delete(authUser, Controller.deleteSalesmanByID);

export default router;