import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { Page } from 'src/app/enums/Page';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent {
  Page = Page

  @Input()
  recipe: Recipe | undefined = undefined
}
