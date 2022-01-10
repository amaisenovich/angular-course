import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from 'src/app/common/enums/Page';
import { Ingredient } from 'src/app/common/models/ingredient.model';
import { ShoppingService } from 'src/app/common/services/shopping.service';
import { CanDeactivate } from 'src/app/common/router/pedning-changes.guard';
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
export class ShoppingListEditComponent implements OnInit, CanDeactivate {
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
    this.nameControl.reset(value)
  }

  amountControl = new FormControl(EMPTY_AMOUNT, Validators.min(1));

  get amount() {
    return this.amountControl.value
  }

  set amount(value: number) {
    this.amountControl.reset(value)
  }

  ingredientGroup = new FormGroup({
    [ControlName.NAME]: this.nameControl,
    [ControlName.AMOUNT]: this.amountControl
  });

  get valid() {
    return this.ingredientGroup.valid
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

  get errors() {
    const errors: string[] = []
    if (
      !this.nameControl.valid &&
      this.nameControl.touched &&
      this.nameControl.errors &&
      this.nameControl.errors[Validators.required.name]
    ) {
      errors.push('name cannot be empty')
    }

    const log = this.amountControl.touched

    if (
      !this.amountControl.valid &&
      this.amountControl.touched &&
      this.amountControl.errors &&
      this.amountControl.errors[Validators.min.name]
    ) {
      errors.push('amount should be bigger than zero')
    }

    console.log(errors, this.nameControl.errors, this.amountControl.errors)
    return errors
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

  canDeactivate = () => {
    if (!this.changed) {
      return true;
    }

    return window.confirm('Do you want to undo your changes?');
  }

  clean = () => {
    this.ingredient = undefined;
    this.name = EMPTY_NAME;
    this.amount = EMPTY_AMOUNT;
    this.router.navigate([Page.SHOPPING]);
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
    this.clean();
  }

  onAmountBlur = () => {
    !this.amount && this.amountControl.setValue(EMPTY_AMOUNT)
  }
}
