import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/pages/home/home.component';
import {AboutComponent} from './core/pages/about/about.component';
import {ContactComponent} from './core/pages/contact/contact.component';
import {CategoriesComponent} from './core/pages/categories/categories.component';
import {RecipesComponent} from './core/pages/recipes/recipes.component';
import {TagsComponent} from './core/pages/tags/tags.component';
import {IngredientsComponent} from './core/pages/ingredients/ingredients.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'categories/:id', component: CategoriesComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'recipies', component: RecipesComponent},
  {path: 'tags', component: TagsComponent},
  {path: 'ingredients', component: IngredientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
