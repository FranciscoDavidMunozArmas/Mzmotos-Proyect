import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import config from './config/config';

import userRouter from './app/routes/user.routes';
import clientRouter from './app/routes/client.routes';
import salemanRouter from './app/routes/salesman.routes';
import productRouter from './app/routes/product.routes';

const app = express();

//settings
app.set("port", config.PORT);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

//routes
app.use("/user", userRouter);
app.use("/client", clientRouter);
app.use("/salesmen", salemanRouter);
app.use("/products", productRouter);

export default app;