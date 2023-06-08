export interface Products{
    productId:any;
    createdAt:any;
    createdBy:string;
    modifiedAt:any;
    modifiedBy:any;
    addedAgo:any;
    imageLink:any;
    isInUserWishList:string;
    subCategoryId:any;
    name:string;
    description:string;
    isOld:string;
    howYearOld:number;
    price:number;
    location:string;
    productImages:string;
   
}
export interface ProductDetails{
    productId:any;
    createdAt:any;
    createdBy:any;
    modifiedAt:any;
    modifiedBy:any;
    addedAgo:any;
    imageLink:string;
    isInUserWishList:boolean;
    sellerName:string;
    sellerProfileImage:string;
    sellerAddress:string
    sellerCreatedAt:number;
    sellerPhoneNumber:number;
    sellerWhatsAppNumber:number;
    subCategoryName:string;
    categoryId:any
    categoryName:string;
    productStatusId:number;
    productStatus:string
    subCategoryId:any;
    name:string
    description:any
    isOld:boolean
    howYearOld:number
    price:number
    location:any
    productImages:string;
  
}

