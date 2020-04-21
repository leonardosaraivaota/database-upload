import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CategoriesRepository from '../repositories/CategoriesRepository';
import CreateCategorieService from '../services/CreateCategoriesService';

const categoriesRouter = Router();

categoriesRouter.get('/categories/:id', async (request, response) => {
  const { id } = request.params;
  /*
  const categoriesRepository = getCustomRepository(CategoriesRepository);
  const category = await categoriesRepository.findOne({ where: { id } });
  if (!category) { }
  */
});

categoriesRouter.get('/', async (request, response) => {
  const categoriesRepository = getCustomRepository(CategoriesRepository);

  const categories = await categoriesRepository.find();

  return response.json(categories);
});

categoriesRouter.post('/', async (request, response) => {
  const { title } = request.body;

  const createCategory = new CreateCategorieService();

  const categories = await createCategory.execute({
    title,
  });

  return response.json(categories);
});

/*
categoriesRouter.delete('/:id', async (request, response) => {
  // TODO
});

categoriesRouter.post('/import', async (request, response) => {
  // TODO
});
*/

export default categoriesRouter;
