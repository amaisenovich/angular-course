import { Component } from '@angular/core';
import { Page } from 'src/app/enums/Page';
import { Recipe } from 'src/app/models/recipe.model';
import { ShoppingService } from 'src/app/services/shopping.service';
import { SelectionService } from 'src/app/services/selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details-commands',
  templateUrl: './recipe-details-commands.component.html',
  styleUrls: ['./recipe-details-commands.component.css']
})
export class RecipeDetailsCommandsComponent {
  constructor(
    private selectionService: SelectionService<Recipe>,
    private shoppingService: ShoppingService,
    private router: Router
  ) {
  }

  onShopClick = () => {
    const recipe = this.selectionService.get()
    recipe && this.shoppingService.merge(...recipe.ingredients)
    this.router.navigate([Page.SHOPPING])
  }
}
