import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { Ingredient } from '../../models/Ingredient';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {

  recipe = new Recipe(
    'Apple Pie',
    [
      new Ingredient("Flour", 2),
      new Ingredient("Apple", 5),
      new Ingredient("Egg", 2),
      new Ingredient("Sugar", 1)
    ]
  )

  constructor() { }

  ngOnInit(): void {
  }

}
