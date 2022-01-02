import { Component } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent {
  currentRecipe: Recipe | null = null;

  onRecipeSelection = (recipe: Recipe) => {
    this.currentRecipe = recipe
  }
}
