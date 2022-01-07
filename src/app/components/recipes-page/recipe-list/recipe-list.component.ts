import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { SelectionService } from 'src/app/services/selection.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []

  constructor(
    private recipeSerivce: RecipeService,
    private selectionService: SelectionService<Recipe>
    ) {
  }

  ngOnInit() {
    this.recipes = this.recipeSerivce.get()
    this.selectionService.select(this.recipes[0])
    this.recipeSerivce.onRecipiesUpdated.subscribe((recipies: Recipe[]) => {
      this.recipes = recipies
    })
  }
}
