import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from 'src/app/common/common.module';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ShoppingListComponent } from './shopping-page/shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-page/shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListEditComponent } from './shopping-page/shopping-list-edit/shopping-list-edit.component';
import { ShoppingRoutingModule } from './shopping-routing.module'

@NgModule({
  declarations: [
    ShoppingPageComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ShoppingRoutingModule
  ],
  exports: [
    ShoppingPageComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingListEditComponent
  ]
})
export class ShoppingModule {
}
