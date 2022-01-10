import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from 'src/app/common/enums/Page';
import { Ingredient } from 'src/app/common/models/ingredient.model';
import { ShoppingService } from 'src/app/common/services/shopping.service';
import { RouterData } from '../../enums/RouterData';

const EMPTY_NAME = ''

const EMPTY_AMOUNT = 0

enum ControlName {
  NAME = 'name',
  AMOUNT = 'amount'
}

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  #ingredient: Ingredient | undefined = undefined;

  set ingredient(ingredient: Ingredient | undefined) {
    this.#ingredient = ingredient;
    this.name = ingredient ? ingredient.name : EMPTY_NAME;
    this.amount = ingredient ? ingredient.amount : EMPTY_AMOUNT;
  }

  get ingredient() {
    return this.#ingredient
  }

  nameControl = new FormControl(EMPTY_NAME, Validators.required);

  get name() {
    return this.nameControl.value
  }

  set name(value: string) {
    this.nameControl.setValue(value)
  }

  amountControl = new FormControl(EMPTY_AMOUNT, Validators.min(1));

  get amount() {
    return this.amountControl.value
  }

  set amount(value: number) {
    this.amountControl.setValue(value)
  }

  formGroup = new FormGroup({
    [ControlName.NAME]: this.nameControl,
    [ControlName.AMOUNT]: this.amountControl
  });

  get valid() {
    return this.formGroup.valid
  }

  get empty() {
    return (
      !this.ingredient
      || (
        this.name === EMPTY_NAME &&
        this.amount === EMPTY_AMOUNT
      )
    )
  }

  get editing() {
    return !!this.ingredient;
  }

  get changed() {
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

  constructor(
    private shoppingService: ShoppingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.ingredient = data[RouterData.INGREDIENT];
    });
  }

  onIngredientSelected = (ingredient: Ingredient | undefined) => {
    if (this.ingredient?.id === ingredient?.id) {
      return
    }

    if (!this.changed) {
      this.ingredient = ingredient
      return
    }

    const confirm = window.confirm('Do you want to undo your changes?')
    if (confirm) {
      this.ingredient = ingredient
      return
    }
  }

  clean = () => {
    this.ingredient = undefined;
    this.name = EMPTY_NAME;
    this.amount = EMPTY_AMOUNT;
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
