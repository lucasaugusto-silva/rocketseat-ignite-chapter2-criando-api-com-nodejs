import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoriesUserCase: ListCategoriesUseCase) { }

    handle(request: Request, response: Response): Response {
        const all = this.listCategoriesUserCase.execute();
        return response.status(200).json(all);
    }
}

export { ListCategoriesController };