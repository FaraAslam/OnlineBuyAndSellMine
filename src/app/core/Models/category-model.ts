export interface Category{
    categoryId:any,
    name:string,
  }

   export interface CategorySearchfilterProduct{
    searchKey:string,
    isOld:boolean| null
  }
  export interface SubCategory{
    categoryId:any,
    subCategoryId:any,
    name:string,
    catagoryName:string,
   
  }
 
  