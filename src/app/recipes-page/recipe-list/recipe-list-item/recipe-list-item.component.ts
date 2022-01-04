import { Component, Input } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';
import { SelectionService } from 'src/services/selection.service';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent {
  @Input()
  recipe: Recipe | undefined = undefined

  constructor(private selectionService: SelectionService<Recipe>) {
  }

  onRecipeClick = () => {
    this.recipe && this.selectionService.select(this.recipe)
  }
}
