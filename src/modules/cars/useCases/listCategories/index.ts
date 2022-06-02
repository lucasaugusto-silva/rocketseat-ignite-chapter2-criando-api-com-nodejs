import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categorieRepository = CategoriesRepository.getInstance();
const listCategoriesUserCase = new ListCategoriesUseCase(categorieRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUserCase);

export { listCategoriesController };