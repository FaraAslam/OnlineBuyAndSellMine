export interface Visitors{
    noOfProducts:number,
    userId: string,
    name:string,
    email:string,
    userName:string,
    phoneNumber:string,
    profileImage:string
   // image:string,
   // userName: string,
   // email: string;
   // phoneNumber: string
   // prosucts: number
  }

  export interface User{
   userId:string,
   name:string,
   profileImage:string
  }
  export interface DashboardCount{
   totalUserCount:number,
   totalProductCount:number,
   totalCategoryCount:number
  }
  export interface UserData{
    userId:string,
   name:string,
   profileImage:string,
   firstName:string
   lastName:string
   email:string
   userName:string
   phoneNumber:number
   address:string,
   whatsAppNumber:number
}

  