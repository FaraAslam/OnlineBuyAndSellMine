export interface UserWithLastMessage{
    userId:any,
    lastText:string,
    lastConnectedDate:string,
    firstName:string,
    lastName:string,
    profileImage:string,
  }
  export interface MessagesBWUsers{
    messageId:any,
    sentTo:string,
    sentFrom:string,
    isCurrentUser:boolean,
    createdDateTime:string,
    messageText:string,
    imageLink:string,
  }