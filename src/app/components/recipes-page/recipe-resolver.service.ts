import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Recipe } from "src/app/models/recipe.model";
import { RouterParam } from "src/app/enums/RouterParam";
import { RecipeService } from "src/app/services/recipe.service";
import { Injectable } from "@angular/core";
import { ProvidedIn } from "src/app/enums/ProvidedIn";

@Injectable({
  providedIn: ProvidedIn.ROOT
})
export class RecipeResolver implements Resolve<Recipe> {
  constructor(private recipeService: RecipeService) {
  }

  resolve(route: ActivatedRouteSnapshot): Recipe {
    const recipeId = route.params[RouterParam.RECIPE_ID]
    const [recipe] = this.recipeService.get((r) => r.id === recipeId)
    return recipe
  }
}