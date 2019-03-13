import {Component, OnInit} from '@angular/core';
import {IngredientService} from '../../../service/ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  ingredients: object;
  ingredientsBase;
  filter: string = null;

  constructor(private ingredientService: IngredientService) {
  }

  ngOnInit() {
    this.ingredientService.getIngredients().subscribe(e => {
      this.ingredientsBase = e;
      this.ingredients = e;
    });

  }

  change() {
    if (this.filter != null) {
      this.ingredients = this.ingredientsBase.filter(e => e.iname.toLowerCase().includes(this.filter.toLowerCase()));
    }
  }
}
