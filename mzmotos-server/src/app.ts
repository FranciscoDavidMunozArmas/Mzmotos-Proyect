import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import config from './lib/constants';

import userRouter from './app/routes/user.routes';
import clientRouter from './app/routes/client.routes';
import salemanRouter from './app/routes/salesman.routes';
import productRouter from './app/routes/product.routes';
import managerRouter from './app/routes/manager.routes';
import warehouseRouter from './app/routes/warehouse.routes';

const app = express();

//settings
app.set("port", config.PORT);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

//routes
app.use("/users", userRouter);
// app.use("/clients", clientRouter);
app.use("/products", productRouter);
app.use("/salesmen", salemanRouter);
// app.use("/manager", managerRouter);
// app.use("/warehouse", warehouseRouter);

export default app;