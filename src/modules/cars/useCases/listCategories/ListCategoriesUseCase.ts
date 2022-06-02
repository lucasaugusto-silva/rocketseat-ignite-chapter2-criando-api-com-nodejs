import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categorieRepository: ICategoriesRepository) { }
    execute(): Category[] {
        const categories = this.categorieRepository.list();
        return categories;
    }
}

export { ListCategoriesUseCase };