import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categorieRepository = null;
const listCategoriesUserCase = new ListCategoriesUseCase(categorieRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUserCase);

export { listCategoriesController };