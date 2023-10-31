
export interface Products{ 
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
  imageLink:string,
  isInUserWishList:boolean,
  categoryName:string,
  wishListId:any
}
  export interface search{
    name:string,
    productId:any,
  }
  export interface ProductImage {
    orderNumber: string;
    imageLink: string;
    productMediaId: string;
  }
  export interface ProductDetails{
    productId:any,
    name:string,
    description:string,
    howYearOld:number,
    price:number,
    createdAt:any,
    isOld:boolean,
    sellerName: string,
    sellerPhoneNumber:string,
    sellerPartnership : any,
    condition:string,
    sellerAddress:string,
    categoryId:any,
    addedAgo:string,
    createdBy:string,
    imageLink:string,
    isInUserWishList:boolean,
    imageLinks:ProductImage[],
    location?:string,
    sellerProfileImage?: string,
    subCategoryId:string,
    whatsAppNumber:number,
  }
  
 