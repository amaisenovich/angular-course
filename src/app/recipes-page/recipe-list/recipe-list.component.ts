import { Recipe } from '../../../models/Recipe'
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/models/Ingredient';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'Apple Pie',
      'This floral take on a classic apple pie from Back in the Day Bakery owner Cheryl Day may...',
      'https://assets.bonappetit.com/photos/6167562bc311c6cceb6c53f1/1:1/w_285,c_limit/Apple-Rose-Pie.jpg',
      [
        new Ingredient("Flour", 2),
        new Ingredient("Apple", 5),
        new Ingredient("Egg", 2),
        new Ingredient("Sugar", 1)
      ]
    ),
    new Recipe(
      'Ramen',
      'Shoyu and Tonkotsu ramen are topped with Chashu (braised pork belly), seasoned soft boiled egg, bamboo shoots, bean sprouts, sesame seeds and fresh scallion.',
      'https://www.halfbakedharvest.com/wp-content/uploads/2021/01/30-Minute-Spicy-Miso-Chicken-Katsu-Ramen-1.jpg',
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
