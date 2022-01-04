import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/models/ingredient.model'
import { SelectionService } from 'src/services/selection.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent {
  @Input()
  ingredient: Ingredient | undefined = undefined;

  constructor(private selectionService: SelectionService<Ingredient>) {
  }

  onIngredientClick = () => {
    this.ingredient && this.selectionService.select(this.ingredient)
  }
}
