import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page } from 'src/app/common/enums/Page';
import { RecipesPageComponent } from './pages/recipes-page.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './pages/recipe-edit/recipe-edit.component';
import { RecipeResolver } from './services/recipe-resolver.service';
import { RecipePlaceholderComponent } from './pages/recipe-placeholder/recipe-placeholder.component';
import { RouterParam } from './enums/RouterParam';
import { RouterData } from './enums/RouterData';

const routes: Routes = [{
  path: Page.RECIPES,
  component: RecipesPageComponent,
  children: [{
    path: Page.ROOT,
    component: RecipePlaceholderComponent,
  }, {
    path: Page.NEW,
    component: RecipeEditComponent
  }, {
    path: `:${RouterParam.RECIPE_ID}`,
    component: RecipeDetailsComponent,
    resolve: {
      [RouterData.RECIPE]: RecipeResolver
    }
  }, {
    path: `:${RouterParam.RECIPE_ID}/${Page.EDIT}`,
    component: RecipeEditComponent,
    resolve: {
      [RouterData.RECIPE]: RecipeResolver
    }
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipiesRoutingModule {
}
