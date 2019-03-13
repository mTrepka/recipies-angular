import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../../../service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: object;
  recipesBase;
  recipe: object;
  singleRecipe: boolean;
  recNumber: string;
  filter: string = null;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.recNumber = this.activatedRoute.snapshot.paramMap.get('id');
    this.singleRecipe = this.recNumber == null;
    if (this.singleRecipe) {
      this.recipeService.getRecipes().subscribe(e => {
        this.recipesBase = e;
        this.recipes = e;
      });
    } else {
      this.recipeService.getRecipe(this.recNumber).subscribe(e => this.recipe = e);
    }

  }

  change() {
    if (this.filter != null) {
      this.recipes = this.recipesBase.filter(e => e.r_name.toLowerCase().includes(this.filter.toLowerCase()));
    }
  }

}
