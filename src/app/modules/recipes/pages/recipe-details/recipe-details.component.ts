import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { RouterData } from '../../enums/RouterData';
import { Recipe } from '../../models/recipe.model'

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input()
  recipe: Recipe | undefined = undefined;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.recipe = data[RouterData.RECIPE]
    })
  }
}
