import { Ingredient } from './Ingredient'

export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public image: string,
    public ingredients: Array<Ingredient>
  ) {

  }
}