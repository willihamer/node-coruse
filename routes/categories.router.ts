import express from 'express';

import { faker } from '@faker-js/faker';

const categoriesRouter = express.Router();

categoriesRouter.get('/', (req, res) => {
  const categories = [];
  for (let index = 0; index < 10; index++) {
    categories.push({
      categoryId: faker.datatype.uuid(),
      categoryName: faker.commerce.department(),
    })

  }
  res.json(categories);
});

categoriesRouter.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
});

categoriesRouter.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json({
    categoryId,
    categoryName: faker.commerce.department(),
  });
});

export default categoriesRouter;
