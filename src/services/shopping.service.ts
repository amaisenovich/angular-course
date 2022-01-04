import { Injectable, EventEmitter } from "@angular/core";
import { ProvidedIn } from "src/enums/ProvidedIn";
import { Ingredient } from "src/models/ingredient.model";

@Injectable({
  providedIn: ProvidedIn.ROOT
})
export class ShoppingService {
  private ingredients: Ingredient[] = [];

  onIngredientsUpdated = new EventEmitter<Ingredient[]>();

  get = () => {
    return this.ingredients.map(i => i.copy())
  }

  merge = (...ingredients: Ingredient[]) => {
    ingredients.forEach(added => {
      const existing = this.ingredients.find((i) => i.id === added.id);
      if (existing) {
        existing.amount += added.amount
        return
      }

      this.ingredients = [
        ...this.ingredients,
        added.copy()
      ]
    })

    this.onIngredientsUpdated.emit(this.get());
  }


  update = (...ingredients: Ingredient[]) => {
    ingredients.forEach(updated => {
      const index = this.ingredients.findIndex((i) => i.id === updated.id);
      this.ingredients.splice(index, 1, updated.copy());
    });

    this.onIngredientsUpdated.emit(this.get());
  }

  delete = (...ingredients: Ingredient[]) => {
    ingredients.forEach(deleted => {
      const index = this.ingredients.findIndex((i) => i.id === deleted.id);
      this.ingredients.splice(index, 1);
    });

    this.onIngredientsUpdated.emit(this.get());
  }
}
