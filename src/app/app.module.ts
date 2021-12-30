import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipe-list/recipe-list-item/recipe-list-item.component';
import { RecipeListItemDetailComponent } from './recipe-list/recipe-list-item/recipe-list-item-detail/recipe-list-item-detail.component';
import { RecipeListCommandsComponent } from './recipe-list/recipe-list-commands/recipe-list-commands.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeListItemDetailComponent,
    RecipeListCommandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
