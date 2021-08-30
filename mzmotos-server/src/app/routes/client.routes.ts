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

router.route("/products/:clientid")
.get(Controller.getProducts)
.post(Controller.postProduct)
.delete(Controller.deleteProducts);

router.route("/products/:clientid/:productid")
.get(Controller.getProduct)
.put(Controller.putProduct)
.delete(Controller.deleteProduct);

export default router;