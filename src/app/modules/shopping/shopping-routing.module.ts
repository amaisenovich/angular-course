import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page } from 'src/app/common/enums/Page';
import { RouterParam } from './enums/RouterParam';
import { RouterData } from './enums/RouterData';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ShoppingListEditComponent } from './shopping-page/shopping-list-edit/shopping-list-edit.component';
import { IngredientResolver } from './services/ingredient-resolver.service';
import { PendingChangesGuard } from 'src/app/common/router/pedning-changes.guard';

const routes: Routes = [{
  path: Page.SHOPPING,
  component: ShoppingPageComponent,
  children: [{
    path: `:${RouterParam.INGREDIENT_ID}`,
    component: ShoppingListEditComponent,
    resolve: {
      [RouterData.INGREDIENT]: IngredientResolver
    },
    canDeactivate: [
      PendingChangesGuard
    ]
  },
  {
    path: Page.ROOT,
    component: ShoppingListEditComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule {
}
