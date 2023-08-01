export interface province{
    provinceId:string;
    name:string;
}
export interface Cities{
    cityId:number;
    name:string;
    provinceName:string;
}
export interface Provinces{
    provinceId:any,
    cityId:any,
    name:string,
    provinceName:string,
    isAdded:boolean,
    index:number,
}