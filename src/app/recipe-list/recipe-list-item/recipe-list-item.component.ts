import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/Recipe';
import { Ingredient } from '../../../models/Ingredient';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {
  recipe = new Recipe(
    'Apple Pie',
    'This floral take on a classic apple pie from Back in the Day Bakery owner Cheryl Day may...',
    'https://assets.bonappetit.com/photos/6167562bc311c6cceb6c53f1/1:1/w_285,c_limit/Apple-Rose-Pie.jpg',
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
