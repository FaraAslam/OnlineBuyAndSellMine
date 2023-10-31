import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, SubCategory } from 'src/app/core/Models/category-model';
import { ProductDetails, ProductImage } from 'src/app/core/Models/visitor/home-model';
import { AccountService } from 'src/app/services/account/account.service';
import { MenuNavbarService } from 'src/app/services/menu-navbar/menu-navbar.services';
import { UserService } from 'src/app/services/user/user.service';
import { ProductService } from 'src/app/services/visitor/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  images: any[] = [];
  htmlContent:any;
  productId:any;
  productImages: ProductImage[] = [];
  subCategories: SubCategory[] = [];
  categoryName: string = '';
  selectedFile: File;
  imagesLoading: boolean = false;
  Categories: Category[] = [];

  Product: ProductDetails = {
    productId: undefined,
    name: '',
    description: '',
    howYearOld: 0,
    price: 0,
    createdAt: undefined,
    isOld: false,
    sellerName: '',
    sellerPhoneNumber: '',
    sellerPartnership: undefined,
    condition: '',
    sellerAddress: '',
    categoryId: undefined,
    addedAgo: '',
    imageLink: '',
    createdBy: '',
    isInUserWishList: false,
    imageLinks: [],
    location: '',
    subCategoryId: '',
    whatsAppNumber: 0
  };
  constructor(private productService:ProductService,private router:Router,private menuNavbarService:MenuNavbarService,
    private accountService:AccountService,private route:ActivatedRoute,private userService:UserService){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.productId = routeParams.get('Id');
    this.getProductData();
    this.loadAllCategory();
  }

  getProductData() {
    debugger
    this.productService.GetAllProductDetials(this.productId).subscribe(
      (data) => {
        debugger;
        console.warn(data);
        
        var dt = data.data;

        for (var a = 0; a < dt.images.length; a++) {
          var productImage: ProductImage = {
            orderNumber: dt.images[a].orderNumber,
            imageLink: dt.images[a].imageLink == null ? './assets/Images/dummy.png' : dt.images[a].imageLink,
            productMediaId: dt.images[a].productMediaId,
          };
          this.productImages.push(productImage);
        }
        this.Product = {
          productId: dt.productId,
          name: dt.name,
          description: dt.description,
          howYearOld: dt.howYearOld,
          price: dt.price,
          createdAt: dt.createdAt,
          isOld: dt.isOld,
          condition: dt.isOld,
          sellerName: dt.sellerName,
          sellerPartnership: dt.sellerPartnership,
          sellerPhoneNumber: dt.sellerPhoneNumber,
          sellerAddress: dt.sellerAddress,
          categoryId: dt.categoryId,
          addedAgo: dt.addedAgo,
          createdBy: dt.createdBy,
          isInUserWishList: dt.isInUserWishList,
          location: dt.location,
          subCategoryId: dt.subCategoryId,
          imageLink:
            dt.imageLink == null
              ? 'assets/Images/RecentProducts.png'
              : dt.imageLink,
          imageLinks:
            dt.imageLinks == null
              ? 'assets/Images/RecentProducts.png'
              : dt.imageLinks,
          whatsAppNumber: dt.whatsAppNumber
        };
        this.GetSubCategoriesById(this.Product.categoryId);
        this.images = this.Product.imageLinks
        this.htmlContent = this.Product.description;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  loadAllCategory() {
    this.menuNavbarService. GetCategories().subscribe(
      (data) => {
        debugger
        var dt = data.data;
        for (let a = 0; a < dt.length; a++) {
          let _mainCategory: Category = {
            categoryId: dt[a].categoryId,
            name: dt[a].name,
          };
          this.Categories.push(_mainCategory);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  GetSubCategoriesById(categoryId: any) {
    this.subCategories = [];
    this.menuNavbarService.GetSubCategoriesById(categoryId).subscribe(
      (data) => {
        debugger
        console.warn(data)
        var dt = data.data;
        for (let a = 0; a < dt.length; a++) {
          let subCategory: SubCategory = {
            subCategoryId: dt[a].subCategoryId,
            name: dt[a].name,
            categoryName: dt[a].categoryName,
            categoryId: undefined,
          
          };
          this.subCategories.push(subCategory);
        }
        this.categoryName = this.subCategories[0].categoryName;
      },
      (error) => {
        if (error.status == 401) {
          this.accountService.doLogout();
          this.router.navigateByUrl('/login');
        }
      }
    );
  }
  onFileUpload(event: any) {
    let formData: FormData = new FormData();
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => { };
    reader.readAsDataURL(this.selectedFile);
    formData.append('ProductImages', this.selectedFile, this.selectedFile.name);
    this.productService.addProductImages(this.productId, formData).subscribe(
      (dt) => {
        if(dt){
          this.productImages = [];
        this.getProductData();
        this.loadAllCategory();
        }
        else{
          Swal.fire('Sorry!', 'Your product is Updated', 'error');
        }

      },
      (error) => {
        if (error.status == 401) {
          this.accountService.doLogout();
          this.router.navigateByUrl('/login');
        }
        console.log('Error in Add Image: ' + error.message);
        this.imagesLoading = false;
        // this.errorMessage = '"Only PNG and JPG Images can be uploaded"';
      }
    );
  }
  UpdateUserProduct(data: any) {
    this.userService
      .userProductUpdate(this.productId, data)
      .subscribe((result) => {
        if (result) {
          Swal.fire('Thank you!', 'Your product is Updated', 'success');
          setTimeout(() => {
            this.router.navigate(['userproduct']);
          }, 1000);
        }
      });
  }

  openImg(img: any) {
    Swal.fire({
      imageUrl: (img),
      imageWidth: 800,
      imageHeight: 600,
      width: '100%',
    })
  }
  removeImg(data: any) {

    if (data) {

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.productService.removeProductImage(data).subscribe((data) => {
            if (result) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
              this.productImages = [];
              this.getProductData();
            }
          });
        }
      });
    }
  }
}
