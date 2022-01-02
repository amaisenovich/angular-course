import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent {
  @Output()
  selection = new EventEmitter<Recipe>()

  @Input()
  recipe: Recipe | null = null

  onClick = () => {
    if (!this.recipe) {
      return
    }

    this.selection.emit(this.recipe)
  }
}
