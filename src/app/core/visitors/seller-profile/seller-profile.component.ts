import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { UserList, UserProductDetails } from '../../Models/visitor/user-model';


@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.css']
})
export class SellerProfileComponent {
  constructor(private userService: UserService,private router:Router, private route: ActivatedRoute) { }
  userList: UserList ={
    noOfProducts: 0,
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    phoneNumber: '',
    profileImage: '',
    fullName: '',
    address: '',
    whatsAppNumber: 0
  };
  UserProductDetails: UserProductDetails[] = [];
  HowMuchProduct:number;
  userId: any;
 
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.userId = routeParams.get('userId');
    this.getSellerProduct();
    this.getSellerData()
   }

  getSellerData(){
   debugger
    this.userService.sellerProfileDate(this.userId).subscribe((result) => {
      debugger
     let dt=result.data;
     this.userList={
      noOfProducts: dt.noOfProducts,
      userId: dt.userId,
      email: dt.email,
      userName: dt.userName,
      phoneNumber: dt.phoneNumber,
      profileImage: dt.profileImage,
      fullName: dt.fullName,
      address: dt.address,
      whatsAppNumber: dt.whatsAppNumber,
      firstName: dt.firstName,
      lastName: dt.lastName,
     }
   });
 }

  getSellerProduct() {
    this.userService.sellerProductsData(this.userId).subscribe((data) => {
    
      var dt = data.data;
  this.HowMuchProduct=dt.length
      for (let a = 0; a < dt.length; a++) {
        let UserProductDetail: UserProductDetails = {
          productId: dt[a].productId,
          name: dt[a].name,
          description: dt[a].description,
          howYearOld: dt[a].howYearOld,
          price: dt[a].price,
          createdAt: dt[a].createdAt,
          addedAgo: dt[a].addedAgo,
          isOld: dt[a].isOld,
          imageLink: dt[a].imageLink == null
            ? 'assets/Images/RecentProducts.png'
            : dt[a].imageLink,
          createdBy: dt[a].createdBy,
          modifiedAt: dt[a].modifiedAt,
          modifiedBy: dt[a].modifiedBy,
          isInUserWishList: dt[a].isInUserWishList,
          sellerName: dt[a].sellerName,
          sellerProfileImage:dt[a] .sellerProfileImage,
          sellerAddress: dt[a].sellerAddress,
          sellerCreatedAt: dt[a].sellerCreatedAt,
          sellerPhoneNumber:dt[a].sellerPhoneNumber,
          sellerWhatsAppNumber: dt[a].sellerWhatsAppNumber,
          subCategoryName:dt[a].subCategoryName,
          categoryId: dt[a].categoryId,
          categoryName:dt[a].categoryName,
          productStatusId: dt[a].productStatusId,
          productStatus: dt[a].productStatus,
          subCategoryId: dt[a].subCategoryId,
          location: dt[a].location,
          productImages:dt[a].productImages
        };
        
        this.UserProductDetails.push(UserProductDetail);
      }
    });
  }
}
