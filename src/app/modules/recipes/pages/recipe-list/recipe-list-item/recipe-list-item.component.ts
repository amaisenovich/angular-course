import { Component, Input } from '@angular/core';
import { Page } from 'src/app/common/enums/Page';
import { Recipe } from '../../../models/recipe.model';

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
