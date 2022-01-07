import { Component } from '@angular/core';
import { Page } from 'src/app/enums/Page';
import { Recipe } from 'src/app/models/recipe.model';
import { ShoppingService } from 'src/app/services/shopping.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { SelectionService } from 'src/app/services/selection.service';

@Component({
  selector: 'app-recipe-details-commands',
  templateUrl: './recipe-details-commands.component.html',
  styleUrls: ['./recipe-details-commands.component.css']
})
export class RecipeDetailsCommandsComponent {
  constructor(
    private selectionService: SelectionService<Recipe>,
    private shoppingService: ShoppingService,
    private navigationService: NavigationService
  ) {
  }

  onShopClick = () => {
    const recipe = this.selectionService.get()
    recipe && this.shoppingService.merge(...recipe.ingredients)
    this.navigationService.navigate(Page.SHOPPING)
  }
}
