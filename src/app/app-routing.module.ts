import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page } from 'src/app/common/enums/Page';
import { RouterParam } from 'src/app/common/enums/RouterParam';
import { RouterData } from 'src/app/common/enums/RouterData';

import { RecipesPageComponent } from 'src/app/modules/recipes/pages/recipes-page.component';
import { RecipePlaceholderComponent } from 'src/app/modules/recipes/pages/recipe-placeholder/recipe-placeholder.component';
import { RecipeDetailsComponent } from 'src/app/modules/recipes/pages/recipe-details/recipe-details.component';
import { RecipeEditComponent } from 'src/app/modules/recipes/pages/recipe-edit/recipe-edit.component';
import { RecipeResolver } from 'src/app/modules/recipes/services/recipe-resolver.service';

import { ShoppingPageComponent } from 'src/app/modules/shopping/shopping-page/shopping-page.component';
import { ShoppingListEditComponent } from 'src/app/modules/shopping/shopping-page/shopping-list-edit/shopping-list-edit.component';
import { IngredientResolver } from 'src/app/modules/shopping/services/ingredient-resolver.service';

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
}, {
  path: Page.SHOPPING,
  component: ShoppingPageComponent,
  children: [{
    path: `:${RouterParam.INGREDIENT_ID}`,
    component: ShoppingListEditComponent,
    resolve: {
      [RouterData.INGREDIENT]: IngredientResolver
    }
  },
  {
    path: Page.ROOT,
    component: ShoppingListEditComponent
  }]
}, {
  path: Page.ANY,
  redirectTo: Page.RECIPES
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
