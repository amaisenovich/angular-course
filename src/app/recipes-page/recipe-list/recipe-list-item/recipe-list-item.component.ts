import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';
import { Ingredient } from 'src/models/ingredient.model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {
  @Input()
  recipe: Recipe | null = null

  constructor() { }

  ngOnInit(): void {
  }

}
