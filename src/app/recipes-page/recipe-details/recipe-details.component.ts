import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/Recipe'
import { Ingredient } from '../../../models/Ingredient'

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
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
