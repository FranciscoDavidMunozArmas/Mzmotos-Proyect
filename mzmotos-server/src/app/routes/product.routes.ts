import { Router } from 'express';
import * as Controller from '../controller/product.controller';

const router = Router();

router.route("/")
.get(Controller.getProducts)
.post(Controller.postProduct)
.delete(Controller.deleteProducts);

router.route("/:id")
.get(Controller.getProducts)
.put(Controller.putProducts)
.delete(Controller.deleteProduct);

export default router;