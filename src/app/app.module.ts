import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RootPageComponent } from 'src/app/pages/root-page.component';
import { RootPageHeaderComponent } from 'src/app/pages/root-page-header/root-page-header.component';
import { RecipesModule } from 'src/app/modules/recipes/recipes-module';
import { ShoppingModule } from 'src/app/modules/shopping/shopping.module';

@NgModule({
  declarations: [
    RootPageComponent,
    RootPageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecipesModule,
    ShoppingModule
  ],
  providers: [],
  bootstrap: [
    RootPageComponent
  ]
})
export class AppModule {
}
