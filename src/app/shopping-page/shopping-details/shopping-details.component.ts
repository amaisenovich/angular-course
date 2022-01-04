import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/models/ingredient.model';
import { SelectionService } from 'src/services/selection.service';
import { ShoppingService } from 'src/services/shopping.service';

const EMPTY_NAME = ''

const EMPTY_AMOUNT = 0

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  ingredient: Ingredient | undefined = undefined;

  name: string = EMPTY_NAME

  amount: number = EMPTY_AMOUNT;

  constructor(
    private shoppingService: ShoppingService,
    private selectionService: SelectionService<Ingredient>
  ) {
  }

  ngOnInit() {
    this.ingredient = this.selectionService.get()
    this.selectionService.onSelected.subscribe(this.onIngredientSelected)
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

    this.ingredient && this.selectionService.select(this.ingredient)
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
    this.selectionService.select(undefined);
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
