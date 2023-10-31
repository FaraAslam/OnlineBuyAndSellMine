export interface Category{
  categoryId?:any,
  subCategoryId?:any,
  name:string,
  isAdded?:boolean,
  index?:number,
  inputStatus?:boolean,
  }

   export interface CategorySearchfilterProduct{
    searchKey:string,
    isOld:boolean| null
  }
  export interface SubCategory{
    categoryId?:any,
    subCategoryId?:any,
    name:string,
    categoryName:string,
    isAdded?:boolean,
    index?:number,
  }
  export interface CategorySearchfilterProduct{
    searchKey:string,
    isOld:boolean| null
  }
  