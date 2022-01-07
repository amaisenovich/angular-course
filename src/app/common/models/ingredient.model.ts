import { IEntity } from 'src/app/common/interfaces/IEntity';

export class Ingredient implements IEntity<Ingredient> {
  #id: string;

  public get id(): string {
    return this.#id
  }

  constructor(
    public name: string,
    public amount: number
  ) {
    this.#id = name
  }

  public isValid = () => {
    return !!this.name && !!this.amount
  }

  public copy = () => {
    const i = new Ingredient(this.name, this.amount)
    i.#id = this.#id
    return i
  }
}