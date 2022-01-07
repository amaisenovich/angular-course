import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { RouterData } from 'src/app/enums/RouterData';
import { Recipe } from 'src/app/models/recipe.model'

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
    console.log('ngOnInit')
    this.route.data.subscribe((data: Data) => {
      console.log('listener')
      this.recipe = data[RouterData.RECIPE]
    })
  }
}
