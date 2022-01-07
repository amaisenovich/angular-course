import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { Page } from 'src/app/common/enums/Page';
import { ShoppingService } from 'src/app/common/services/shopping.service';
import { Recipe } from '../../../models/recipe.model';
import { RouterData } from '../../../enums/RouterData';

@Component({
  selector: 'app-recipe-details-commands',
  templateUrl: './recipe-details-commands.component.html',
  styleUrls: ['./recipe-details-commands.component.css']
})
export class RecipeDetailsCommandsComponent implements OnInit {
  Page = Page

  recipe: Recipe | undefined = undefined

  constructor(
    private shoppingService: ShoppingService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.recipe = data[RouterData.RECIPE]
    })
  }

  onShopClick = () => {
    this.recipe && this.shoppingService.merge(...this.recipe.ingredients)
  }
}
