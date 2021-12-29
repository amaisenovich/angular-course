import { Recipe } from '../../models/Recipe'
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/models/Ingredient';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Array<Recipe> = [
    new Recipe(
      'Apple Pie',
      [
        new Ingredient("Flour", 2),
        new Ingredient("Apple", 5),
        new Ingredient("Egg", 2),
        new Ingredient("Sugar", 1)
      ]
    ),
    new Recipe(
      'Ramen',
      [
        new Ingredient('Noodles', 1),
        new Ingredient('Beef', 1),
        new Ingredient('Egg', 1),
        new Ingredient('Water', 5)
      ]
    )
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
