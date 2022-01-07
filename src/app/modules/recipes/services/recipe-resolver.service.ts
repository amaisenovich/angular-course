import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ProvidedIn } from "src/app/common/enums/ProvidedIn";
import { RecipeService } from "../services/recipe.service";
import { Recipe } from "../models/recipe.model";
import { RouterParam } from "../enums/RouterParam";

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