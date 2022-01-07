import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/common/models/ingredient.model';
import { ShoppingService } from 'src/app/common/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = []

  onIngredientsSubscribtion: Subscription | undefined = undefined;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingService.get()
    this.onIngredientsSubscribtion = this.shoppingService.onIngredientsUpdated.subscribe((ingredients) => {
      this.ingredients = ingredients
    })
  }

  ngOnDestroy() {
    this.onIngredientsSubscribtion && this.onIngredientsSubscribtion.unsubscribe()
  }
}
