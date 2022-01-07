import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from 'src/app/common/enums/Page';
import { RouterData } from 'src/app/common/enums/RouterData';
import { Ingredient } from 'src/app/common/models/ingredient.model';
import { ShoppingService } from 'src/app/common/services/shopping.service';

const EMPTY_NAME = ''

const EMPTY_AMOUNT = 0

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  ingredient: Ingredient | undefined = undefined;

  name: string = EMPTY_NAME

  amount: number = EMPTY_AMOUNT;

  constructor(
    private shoppingService: ShoppingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.params)
    console.log('ngOnInit')
    this.route.data.subscribe((data) => {
      console.log('listener')
      this.setIngredient(data[RouterData.INGREDIENT])
    })
  }

  setIngredient = (ingredient: Ingredient | undefined) => {
    this.ingredient = ingredient
    this.name = ingredient ? ingredient.name : EMPTY_NAME
    this.amount = ingredient ? ingredient.amount : EMPTY_AMOUNT
  }

  onIngredientSelected = (ingredient: Ingredient | undefined) => {
    if (this.ingredient?.id === ingredient?.id) {
      return
    }

    if (!this.hasChanges()) {
      return this.setIngredient(ingredient)
    }

    const confirm = window.confirm('Do you want to undo your changes?')
    if (confirm) {
      return this.setIngredient(ingredient)
    }
  }

  isValid = () => {
    return new Ingredient(this.name, this.amount).isValid();
  }

  isEmpty = () => (
    !this.ingredient ||
    (
      this.name === EMPTY_NAME &&
      this.amount === EMPTY_AMOUNT
    )
  )

  isEditing = () => {
    return !!this.ingredient;
  }

  hasChanges = () => {
    if (!this.ingredient) {
      return (
        this.name !== EMPTY_NAME ||
        this.amount !== EMPTY_AMOUNT
      );
    }

    return (
      this.ingredient.name !== this.name ||
      this.ingredient.amount !== this.amount
    );
  }

  clean = () => {
    this.name = EMPTY_NAME;
    this.amount = EMPTY_AMOUNT;
    this.ingredient = undefined;
    this.router.navigate([Page.SHOPPING])
  }

  onAddClick = () => {
    if (this.ingredient) {
      return;
    }

    const ingredient = new Ingredient(this.name, this.amount)
    this.shoppingService.merge(ingredient);
    this.clean();
  }

  onDeleteClick = () => {
    if (!this.ingredient) {
      return;
    }

    this.shoppingService.delete(this.ingredient);
    this.clean();
  }

  onClearClick = () => {
    this.clean();
  }

  onUpdateClick = () => {
    if (!this.ingredient) {
      return;
    }

    this.ingredient.name = this.name;
    this.ingredient.amount = this.amount;
    this.shoppingService.update(this.ingredient);
    this.clean()
  }

  onAmountBlur = () => {
    this.amount = this.amount || 0;
  }
}
