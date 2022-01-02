import { Component, Input } from '@angular/core';
import { Recipe } from 'src/models/recipe.model'

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  @Input()
  recipe: Recipe | null = null;
}
