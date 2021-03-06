import { IEntity } from 'src/app/common/interfaces/IEntity';
import { Ingredient } from 'src/app/common/models/ingredient.model'
import { getId } from 'src/app/common/utils/getId';

export class Recipe implements IEntity<Recipe> {
  #id: string = getId().toString()

  public get id(): string {
    return this.#id
  }

  constructor(
    public name: string,
    public description: string,
    public image: string,
    public ingredients: Array<Ingredient>
  ) {
  }

  copy() {
    const r = new Recipe(
      this.name,
      this.description,
      this.image,
      this.ingredients.map(i => i.copy())
    )

    r.#id = this.#id;
    return r;
  }
}
