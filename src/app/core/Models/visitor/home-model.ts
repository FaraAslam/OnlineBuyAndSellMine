
export interface RecentProducts{ 
  productId:any,
  createdAt:any,
  createdBy:any
  modifiedAt:any,
  modifiedBy:any
  addedAgo:any,
  imageLink:any
  isInUserWishList:boolean
  sellerName:string
  sellerProfileImage:any
  sellerAddress:any
  sellerCreatedAt:any,
  sellerPhoneNumber:number,
  subCategoryName:string
  categoryId:any,
  categoryName:string,
  productStatusId:number
  productStatus:any,
  subCategoryId:any,
  name:string,
  description:string
  isOld:boolean,
  howYearOld:number,
  price:number,
  location:string,
  productImages:string,
}
 export interface Product{
  productId:any,
  name:string,
  description:string,
  howYearOld:number,
  price:number,
  createdAt:any,
  addedAgo:string,
  imageLink:string
}
export interface NewProducts{
  productId:any
  createdAt:any,
  createdBy:any,
  modifiedAt:any,
  modifiedBy:any,
  addedAgo:any,
  imageLink:any,
  isInUserWishList:boolean,
  sellerName:string,
  sellerProfileImage:any,
  sellerAddress:any,
  sellerCreatedAt:any,
  sellerPhoneNumber:number,
  subCategoryName:string,
  categoryId:any,
  categoryName:string,
  productStatusId:number,
  productStatus:string,
  subCategoryId:any,
  name:string,
  description:string,
  isOld:boolean
  howYearOld:number,
  price:number,
  location:any,
  productImages:string,
}

  export interface ProductDetails{
    productId:any,
    createdAt:any,
    createdBy:any,
    modifiedAt:any,
    modifiedBy:any,
    addedAgo:string,
    isInUserWishList:boolean,
    name:string,
    description:string,
    sellerName: string,
    sellerPhoneNumber:string,
    sellerAddress:string,
    categoryId:any,
    sellerProfileImage:string,
    imageLink:string,
    sellerCreatedAt:string,
    subCategoryName:string,
    categoryName:string,
    productStatusId:number,
    productStatus:string,
    subCategoryId:any,
    price:number,
  }
  
  
 