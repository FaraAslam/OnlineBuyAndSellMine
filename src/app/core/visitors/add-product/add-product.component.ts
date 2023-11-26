import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AccountService } from 'src/app/services/account/account.service';
import { Category, SubCategory} from '../../Models/category-model';
import { MenuNavbarService } from 'src/app/services/menu-navbar/menu-navbar.services';
import {   subCategory } from '../../Models/visitor/subcategories-model';
import { SubCategoriesService } from 'src/app/services/sub-categories/sub-categories.service';
import { ProductService } from 'src/app/services/visitor/product.service';
import Swal from 'sweetalert2';
import { LocationService } from 'src/app/services/location/location.service';
import { Cities, Provinces, province } from '../../Models/location model';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
  
})
export class AddProductComponent  implements OnInit{
  addProductForm: FormGroup;
  provinces: Provinces[]=[];
  subCategories: subCategory[]=[];
  categoryId:any = "";
  UserId: any = "";
  imagesToAppend: any[]=[]
  addProductLoading: boolean = false;
  categoryName: string = "";
  IsCurrentUser: boolean = false;
  Categories:Category[]=[];
  ProductFormData: FormData = new FormData();
  errorMessage: any = "";
  addProductImages: any[] = [];
  cities: Provinces[] = [];
  provinceId: any = '';
  selectedFiles?: FileList;
  constructor(private formBuilder: FormBuilder,private router:Router ,private subCategoriesService:SubCategoriesService ,
    private route:ActivatedRoute,private accountService:AccountService,private productService:ProductService,private locationService:LocationService){}
 
    ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      this.UserId = routeParams.get('UserId'); if (this.UserId == "" || this.UserId == null) {
        this.UserId = this.accountService.getUserId();
        this.IsCurrentUser = true;
      }
     this.loadProvinces()
      this.loadAllCategory();
     this. addProductModal()
    }
    loadAllCategory() {
      
      this.subCategoriesService.GetCategories().subscribe((data) => {
    
        var dt = data.data;
        for (let a = 0; a < dt.length; a++) {
          let _mainCategory: Category = {
            categoryId: dt[a].categoryId,
            name: dt[a].name,
          }
          this.Categories.push(_mainCategory);
        }
      }, (error) => {
        if (error.status == 401) {
          this.accountService.doLogout();
          this.router.navigateByUrl('/login');
        }
      });
    }
  GetSubCategoriesById() {
    this.subCategories = []
    this.subCategoriesService.GetSubCategoriesById(this.categoryId).subscribe((data) => {
   
      var dt = data.data;
      for (let a = 0; a < dt.length; a++) {
        let subCategory: SubCategory = {
          name: dt[a].name,
          categoryName: dt[a].catagoryName,
          categoryId: dt[a].categoryId,
          subCategoryId: dt[a].subCategoryId,
        
        }
        this.subCategories.push(subCategory);
      }
      this.categoryName = this.subCategories[0].categoryName

    }, (error) => {
      if (error.status == 401) {
        this.accountService.doLogout();
        this.router.navigateByUrl('/login');
      }
    });
  }
    loadProvinces() {
   
        this.locationService.GetProvince().subscribe((data) =>{ 
          let dt = data.data;
        
          for (let a = 0; a < dt.length; a++) {
            let province: Provinces = {
              provinceId: dt[a].provinceId,
              name: dt[a].name,
              cityId: dt[a].cityId,
              provinceName: dt[a].provinceName,
              isAdded: dt[a].isAdded,
              index: dt[a].index
            };
            this.provinces.push(province);
          }
        },
        (error) => {
          if (error.status == 401) {
            this.accountService.doLogout();
            this.router.navigateByUrl('/signIn');
          }
          console.log('Error in getProvince: ' + error.message);
        }
      );
    }
    GetCitiesById() {
      this.locationService.getCitiesLists(this.provinceId).subscribe(
        (data) => {
          this.cities = [];
          let dt = data.data;
         
          for (let a = 0; a < dt.length; a++) {
            let city: Provinces = {
              provinceId: dt[a].provinceId,
              name: dt[a].name,
              cityId: dt[a].cityId,
              provinceName: dt[a].provinceName,
              isAdded: dt[a].isAdded,
              index: dt[a].index
            };
            this.cities.push(city);
          }
        },
        (error) => {
          if (error.status == 401) {
            this.accountService.doLogout();
            this.router.navigateByUrl('/signIn');
          }
          console.log('Error in getProvince: ' + error.message);
        }
      );
    }
    addProductModal() {
      this.addProductForm = this.formBuilder.group({
        SubCategoryId: [''],
        categoryId: [''],
        Name: [],
        Description: [],
        IsOld: [false],
        Target: [],
        HowYearOld: [0],
        Price: [],
        CityName: [],
        ProvinceName: [],
        ProductImages: [],
      });
    }
    onSubmitAddProduct() {
      
      for (let a = 0; a < this.provinces.length; a++){
        if(this.addProductForm.get('ProvinceName')?.value == this.provinces[a].provinceId){
          
          this.ProductFormData.append('Location', this.addProductForm.get('CityName')?.value + ', ' +this.provinces[a].name)
        }
      }
      if (this.addProductForm.valid) {
        this.errorMessage = '';
        this.ProductFormData.append('SubCategoryId', this.addProductForm.get('SubCategoryId')?.value)
        this.ProductFormData.append('Name', this.addProductForm.get('Name')?.value)
        this.ProductFormData.append('Description', this.addProductForm.get('Description')?.value)
        this.ProductFormData.append('IsOld', this.addProductForm.get('IsOld')?.value)
        this.ProductFormData.append('Target', this.addProductForm.get('Target')?.value)
        this.ProductFormData.append('HowYearOld', this.addProductForm.get('HowYearOld')?.value)
        this.ProductFormData.append('Price', this.addProductForm.get('Price')?.value)
        this.ProductFormData.append('Location', this.addProductForm.get('CityName')?.value + ' ' + this.addProductForm.get('ProvinceName')?.value)
        this.productService.addProduct(this.ProductFormData).subscribe(
          (dt) => {
            debugger
            this.addProductForm.reset();
            Swal.fire('Thank you!', 'Your product is Added', 'success');
            setTimeout(() => {
              this.router.navigate(['userproduct']);
            }, 1000);
          },
          (error) => {
            this.errorMessage = ' Validation failed.';
            if (error.status == 401) {
              this.accountService.doLogout();
              this.router.navigateByUrl('/login');
            }
          }
        );
      } else {
        this.errorMessage = 'please fill out all required fields.';
      }

  }
  onAddProductImage(event: any) {
    if (event.target.files.length > 0 && event.target.files.length < 8) {
      this.selectedFiles = event.target.files;
      for (var a = 0; a < event.target.files.length; a++) {
        const reader = new FileReader();
        const file = event.target.files[a];
        this.ProductFormData.append('ProductImages', file, file.name);
        reader.readAsDataURL(file);
        // reader.readAsDataURL(this.selectedFiles[a]);
        reader.onload = (_event) => {
          if (this.addProductImages.length < 8) {
            this.addProductImages.push(reader.result);
          }
          else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: "Sorry, You have already 8 image's save.",
            })
          }
        }
      }
    }

  }
  removeImg(data: string) {
    let index = this.addProductImages.lastIndexOf(data);
    // let ProductIndex = this.addProductImages.lastIndexOf(this.addProductImages);
    delete this.addProductImages[index]
      this.addProductImages.splice(index,1);
      this.onAddProductImage(this.addProductImages)
  console.log(this.addProductImages);
  
}
}
