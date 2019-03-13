import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../../../service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: object;
  recipesBase;
  filter: string = null;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(e => {
      this.recipesBase = e;
      this.recipes = e;
    });

  }

  change() {
    if (this.filter != null) {
      this.recipes = this.recipesBase.filter(e => e.r_name.toLowerCase().includes(this.filter.toLowerCase()));
    }
  }

}
