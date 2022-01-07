import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/common/models/ingredient.model';
import { ShoppingService } from 'src/app/common/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = []

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingService.get()
    this.shoppingService.onIngredientsUpdated.subscribe((ingredients) => {
      this.ingredients = ingredients
    })
  }
}
