import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model'
import { SelectionService } from 'src/app/services/selection.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input()
  recipe: Recipe | undefined = undefined;

  constructor(
    private selectionService: SelectionService<Recipe>
  ) {
  }

  ngOnInit() {
    this.recipe = this.selectionService.get()
    this.selectionService.onSelected.subscribe((recipe: Recipe) => {
      this.recipe = recipe
    })
  }
}
