import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/Recipe'
import { Ingredient } from '../../models/Ingredient'

@Component({
  selector: 'app-recipe-list-item-detail',
  templateUrl: './recipe-list-item-detail.component.html',
  styleUrls: ['./recipe-list-item-detail.component.css']
})
export class RecipeListItemDetailComponent implements OnInit {

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
