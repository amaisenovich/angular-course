import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page } from 'src/app/enums/Page';
import { RecipesPageComponent } from 'src/app/components/recipes-page/recipes-page.component';
import { ShoppingPageComponent } from 'src/app/components/shopping-page/shopping-page.component';
import { RouterParam } from 'src/app/enums/RouterParam';
import { RecipeDetailsComponent } from 'src/app/components/recipes-page/recipe-details/recipe-details.component';
import { RecipeEditComponent } from 'src/app/components/recipes-page/recipe-edit/recipe-edit.component';
import { RecipeResolver } from 'src/app/components/recipes-page/recipe-resolver.service';
import { IngredientResolver } from 'src/app/components/shopping-page/ingredient-resolver.service';
import { RouterData } from 'src/app/enums/RouterData';
import { RecipeDetailsPlaceholderComponent } from 'src/app/components/recipes-page/recipe-details-placeholder/recipe-details-placeholder.component';
import { ShoppingListEditComponent } from './components/shopping-page/shopping-list-edit/shopping-list-edit.component';

const routes: Routes = [{
  path: Page.RECIPES,
  component: RecipesPageComponent,
  children: [{
    path: Page.ROOT,
    component: RecipeDetailsPlaceholderComponent,
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
    path: '',
    component: ShoppingListEditComponent
  }]
}, {
  path: "**",
  redirectTo: Page.RECIPES
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
