import express from 'express';

import { faker } from '@faker-js/faker'

const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = parseInt(size as string) || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })

  }
  res.json(products);
});

productsRouter.get('/filter', (req, res) => {
  res.send('filtered');
});

productsRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'iPhone X3',
    price: 32000,
  });
});

export default productsRouter;
