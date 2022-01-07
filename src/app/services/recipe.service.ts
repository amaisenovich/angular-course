import { Injectable, EventEmitter } from "@angular/core";
import { ProvidedIn } from "src/app/enums/ProvidedIn";
import { Recipe } from "src/app/models/recipe.model";
import { Ingredient } from "src/app/models/ingredient.model";

@Injectable({
  providedIn: ProvidedIn.ROOT
})
export class RecipeService {
  private recipies: Recipe[] = [
    new Recipe(
      'Apple Pie',
      'This floral take on a classic apple pie from Back in the Day Bakery owner Cheryl Day may...',
      'https://assets.bonappetit.com/photos/6167562bc311c6cceb6c53f1/1:1/w_285,c_limit/Apple-Rose-Pie.jpg',
      [
        new Ingredient("Flour", 2),
        new Ingredient("Apple", 5),
        new Ingredient("Egg", 2),
        new Ingredient("Sugar", 1)
      ]
    ),
    new Recipe(
      'Ramen',
      'Shoyu and Tonkotsu ramen are topped with Chashu (braised pork belly), seasoned soft boiled egg, bamboo shoots, bean sprouts, sesame seeds and fresh scallion.',
      'https://www.halfbakedharvest.com/wp-content/uploads/2021/01/30-Minute-Spicy-Miso-Chicken-Katsu-Ramen-1.jpg',
      [
        new Ingredient('Noodles', 1),
        new Ingredient('Beef', 1),
        new Ingredient('Egg', 1),
        new Ingredient('Water', 5)
      ]
    )
  ]

  onRecipiesUpdated = new EventEmitter<Recipe[]>()

  get = (prediacate: (r: Recipe) => boolean = () => true): Recipe[] => {
    return this.recipies.filter(prediacate).map(r => r.copy())
  }
}
