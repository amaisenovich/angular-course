import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Ingredient } from 'src/models/ingredient.model';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.css']
})
export class ShoppingListEditComponent implements OnChanges {
  @Output()
  add = new EventEmitter<Ingredient>();

  @Output()
  delete = new EventEmitter<Ingredient>();

  @Output()
  clear = new EventEmitter<Ingredient>();

  @Output()
  update = new EventEmitter<Ingredient>();

  @Input()
  ingredient: Ingredient | null = null;

  name: string = ''

  amount: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (!this.ingredient) {
      return
    }

    if (!this.isEmpty()) {
      const confirm = window.confirm('Do you want to clear your form?')
      if (confirm) {
        this.clean()
      }
    }

    this.name = this.ingredient.name
    this.amount = this.ingredient.amount
  }

  isValid = () => {
    return new Ingredient(this.name, this.amount).isValid()
  }

  isEmpty = () => (
    !this.ingredient ||
    (
      this.name === '' &&
      this.amount === 0
    )
  )

  isEditing = () => {
    return !!this.ingredient
  }

  hasChanges = () => {
    if (!this.ingredient) {
      return
    }

    return (
      this.ingredient.name !== this.name ||
      this.ingredient.amount !== this.amount
    )
  }

  clean = () => {
    this.name = ''
    this.amount = 0
    this.ingredient && this.clear.emit(this.ingredient)
  }

  onAddClick = () => {
    const ingredient = new Ingredient(this.name, this.amount);
    this.add.emit(ingredient);
    this.clean();
  }

  onDeleteClick = () => {
    if (!this.ingredient) {
      return
    }

    this.delete.emit(this.ingredient);
    this.clean()
  }

  onClearClick = () => {
    this.clean()
  }

  onUpdateClick = () => {
    if (!this.ingredient) {
      return
    }

    this.ingredient.name = this.name
    this.ingredient.amount = this.amount
    this.update.emit(this.ingredient)
    this.clean()
  }

  onAmountBlur = () => {
    this.amount = this.amount || 0
  }
}
