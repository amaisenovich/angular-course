import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ProvidedIn } from "src/app/enums/ProvidedIn";
import { RouterParam } from "src/app/enums/RouterParam";
import { Ingredient } from "src/app/models/ingredient.model";
import { ShoppingService } from "src/app/services/shopping.service";

@Injectable({
  providedIn: ProvidedIn.ROOT
})
export class IngredientResolver implements Resolve<Ingredient> {
  constructor(private shoppingService: ShoppingService) {
  }

  resolve(activeRoute: ActivatedRouteSnapshot): Ingredient {
    const ingredientId = activeRoute.params[RouterParam.INGREDIENT_ID]
    const [ingredient] = this.shoppingService.get(i => i.id === ingredientId)
    return ingredient
  }
}