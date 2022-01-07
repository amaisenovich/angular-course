import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/enums/Page';
import { Recipe } from 'src/app/models/recipe.model';
import { ShoppingService } from 'src/app/services/shopping.service';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { RouterData } from 'src/app/enums/RouterData';

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

  onShopClick = (e: MouseEvent) => {
    if (!this.recipe) {
      e.preventDefault()
      e.stopPropagation()
      return
    }

    this.shoppingService.merge(...this.recipe.ingredients)
  }
}
