import { EntityRepository, Repository } from 'typeorm';

import Category from '../models/Category';

interface CategoryDTO {
  title: string;
}

@EntityRepository(Category)
class CategoryRepository extends Repository<Category> {
  public async findByCategory(id: string): Promise<Category | null> {
    const findCategory = await this.findOne({
      where: { id },
    });

    return findCategory || null;
  }
}

export default CategoryRepository;
