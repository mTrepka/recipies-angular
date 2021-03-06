import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavComponent} from './core/static/nav/nav.component';
import {FooterComponent} from './core/static/footer/footer.component';
import {HeaderComponent} from './core/static/header/header.component';
import {RecipesComponent} from './core/pages/recipes/recipes.component';
import {CategoriesComponent} from './core/pages/categories/categories.component';
import {IngredientsComponent} from './core/pages/ingredients/ingredients.component';
import {ContactComponent} from './core/pages/contact/contact.component';
import {AboutComponent} from './core/pages/about/about.component';
import {HomeComponent} from './core/pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RecipeComponent} from './core/pages/recipes/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    RecipesComponent,
    CategoriesComponent,
    IngredientsComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
