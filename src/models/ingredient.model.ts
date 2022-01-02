export class Ingredient {
  constructor(
    public name: string,
    public amount: number
  ) {
  }

  public isValid = () => {
    return !!this.name && !!this.amount
  }
}