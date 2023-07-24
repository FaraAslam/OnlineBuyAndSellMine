export interface UserList{
    noOfProducts:number,
    userId:any,
    firstName:string,
    lastName:string,
    email:string,
    userName:string,
    phoneNumber:string,
    profileImage:any,
    fullName:string,
    address:string,
    whatsAppNumber:number,
}

export interface UserProductDetails{
    productId:any,
    name:string,
    description:string,
    howYearOld:number,
    price:number,
    createdAt:any,
    isOld:boolean,
    createdBy: string,
    modifiedAt:string,
    modifiedBy : any,
    categoryId:any,
    addedAgo:string,
    imageLink:string,
    profileImage:string
    isApproved:number
  } 
