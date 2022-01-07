import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page } from 'src/app/common/enums/Page';
import { RouterParam } from 'src/app/common/enums/RouterParam';
import { RouterData } from 'src/app/common/enums/RouterData';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { IngredientResolver } from './services/ingredient-resolver.service';
import { ShoppingListEditComponent } from './shopping-page/shopping-list-edit/shopping-list-edit.component';

const routes: Routes = [{
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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule {
}
