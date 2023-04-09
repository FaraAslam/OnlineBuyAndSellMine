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
    imageLink:string
  }