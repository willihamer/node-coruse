
import { Express } from 'express';
import productsRouter from "./products.router";
import categoriesRouter from "./categories.router";

const RouterApi = (app: Express) => {
  app.use('/products', productsRouter);
  app.use('/categories', categoriesRouter);
}

export default RouterApi;
