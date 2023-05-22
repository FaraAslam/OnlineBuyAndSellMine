import { Component, OnInit } from '@angular/core';
import { SubCategoriesService } from 'src/app/services/sub-categories/sub-categories.service';
import { subCategory } from '../../Models/visitor/subcategories-model';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  subCategories: subCategory[] = [];
  categorySearchfilterProduct: object;
  selectedStatus: any;
  categoryId: any;

  getSave(save: any) {
    alert("Save")
  }
  dataSource: MatTableDataSource<subCategory>;
  constructor(private router:Router,private route: ActivatedRoute,private subCategoriesService: SubCategoriesService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.categoryId = routeParams.get('categoryId');
    debugger
    this.loadSubCategoryList()
  }

  loadSubCategoryList() {
    debugger
    this.subCategoriesService.getSubCategories().subscribe((data) => {
      debugger
      var dt = data.data;
      for (let a = 0; a < dt.length; a++) {
        let _subCategory: subCategory = {
          name: dt[a].name,
          categoryId: dt[a].categoryId,
          subCategoryId: dt[a].subCategoryId,
          catagoryName: dt[a].catagoryName,
        }
        this.subCategories.push(_subCategory);
      }
      this.dataSource = new MatTableDataSource(this.subCategories);
    }, (error) => {
      console.log(error)
    });
  }
  name(categoryId: any, name: any) {
    throw new Error('Method not implemented.');
  }
}
