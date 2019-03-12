import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../service/category.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: object;
  categoriesBase;
  category: object;
  singleCategory: boolean;
  catNumber: string;
  filter: string = null;

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.catNumber = this.activatedRoute.snapshot.paramMap.get('id');
    this.singleCategory = this.catNumber == null;
    if (this.singleCategory) {
      this.categoryService.getCategories().subscribe(e => {
        this.categoriesBase = e;
        this.categories = e;
      });
    } else {
      this.categoryService.getCategory(this.catNumber).subscribe(e => this.category = e);
    }
  }

  change() {
    if (this.filter != null) {
      this.categories = this.categoriesBase.filter(e => e.cname.toLowerCase().includes(this.filter.toLowerCase()));
    }
  }
}
