import { Component, OnInit } from '@angular/core';
import { SubCategoriesService } from 'src/app/services/sub-categories/sub-categories.service';
import { Category, SubCategory } from '../../Models/category-model';
import { AccountService } from 'src/app/services/account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  Categories: Category[] = [];
  subCategories: SubCategory[] = [];
  loading: boolean = false;
  SubCategoriesData: any[] = [];
  loadDefualt: any;
  constructor(
    private subCategoriesService: SubCategoriesService,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAllCategory();
  }
  loadAllCategory() {
    this.loading = true;
    this.subCategoriesService.GetCategories().subscribe(
      (data) => {
        var dt = data.data;
        for (let a = 0; a < dt.length; a++) {
          let _mainCategory: Category = {
            categoryId: dt[a].categoryId,
            name: dt[a].name,
          };
          this.loadSubCategories(_mainCategory.categoryId);
          this.Categories.push(_mainCategory);
          if (a == 0) {
            this.loadDefualt = _mainCategory.categoryId;
          }
        }
        this.loading = false;
      },
      (error) => {
        if (error.status == 401) {
          this.accountService.doLogout();
          this.router.navigateByUrl('/');
        }
      }
    );
  }
  loadSubCategories(data: any) {
    this.subCategories = [];
    this.subCategoriesService.GetSubCategoriesById(data).subscribe((data) => {
      debugger;
      var dt = data.data;
      for (let a = 0; a < dt.length; a++) {
        let subCategory: SubCategory = {
          name: dt[a].name,
          categoryName: dt[a].categoryName,
          categoryId: dt[a].categoryId,
          subCategoryId: dt[a].subCategoryId,
        };
        this.subCategories.push(subCategory);
        debugger;
      }
      this.getSubCategory(this.loadDefualt);
    });
  }
  getSubCategory(data: any) {
    this.SubCategoriesData = [];
    for (let a = 0; a < this.subCategories.length; a++) {
      if (data == this.subCategories[a].categoryId) {
        this.SubCategoriesData.push(this.subCategories[a]);
      }
    }
  }
}
