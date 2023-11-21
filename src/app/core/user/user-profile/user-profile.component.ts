import { Component } from '@angular/core';
import { UserList } from '../../Models/visitor/user-model';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import Swal from 'sweetalert2';
import { profileStateModel } from '../../Models/state';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userList: UserList ={
    noOfProducts: 0,
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    phoneNumber: '',
    profileImage: '',
    fullName: '',
    address: '',
    whatsAppNumber: 0,
  
  };
  userId: any;
  selectedFile: File;
  imagesLoading: boolean = false;
constructor(private userService: UserService,private router:Router,
   private route: ActivatedRoute,private accountService:AccountService,
  ){}

ngOnInit(){
  const routeParams = this.route.snapshot.paramMap;
    this.userId = routeParams.get('userId');
    this.userId = this.accountService.getUserId()
 this.getUserData() 
}
getUserData(){
  debugger
   this.userService.userProfileData(this.userId).subscribe((result) => {
     debugger
    let dt=result.data;
    this.userList={
     noOfProducts: dt.noOfProducts,
     userId: dt.userId,
     email: dt.email,
     userName: dt.userName,
     phoneNumber: dt.phoneNumber,
     profileImage: dt.profileImage ==null?"assets/Images/profileImage.png" : dt.profileImage,
     fullName: dt.fullName,
     address: dt.address,
     whatsAppNumber: dt.whatsAppNumber,
     firstName:dt.firstName,
    lastName:dt.lastName,

    }
  });
}
UpdateUser(data: any) {
  this.userService
    .userProfileUpdate({
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      address:data.address,
      whatsAppNumber:data.whatsAppNumber
    })
    .subscribe((result) => {
      if (result.status == 401) {
        this.accountService.doLogout();
        this.router.navigateByUrl('/');
      }
      if (result) {
          Swal.fire({
  toast: true,
  icon: 'success',
  title: 'Update successfully',
   position: 'top-right',
  showConfirmButton: false,
timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
}
)

// let changedData: profileStateModel={
//   firstName: data.firstName,
//   lastName:  data.lastName,
//   userImg: this.userList.profileImage
// }
//this.store.dispatch(changeProfileAction({profile: changedData}))
}
} )}
loadUserData(): void {
  this.userService.userProfileDate().subscribe((result) => {
    var dt = result.data;
    this.userList={
      noOfProducts: dt.noOfProducts,
      userId: dt.userId,
      email: dt.email,
      userName: dt.userName,
      phoneNumber: dt.phoneNumber,
      profileImage: dt.profileImage ==null?"assets/Images/profileImage.png" : dt.profileImage,
      fullName: dt.fullName,
      address: dt.address,
      whatsAppNumber: dt.whatsAppNumber,
      firstName:dt.firstName,
     lastName:dt.lastName,
    }
  });
}
onFileUpload(event: any) {
  let formData:FormData = new FormData()
  this.selectedFile = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
   
  };
  reader.readAsDataURL(this.selectedFile);
  formData.append('ProfileImage',this.selectedFile,this.selectedFile.name);
  debugger
  this.userService.updateUserProfileImage(formData).subscribe(
    (dt) => {
      this.loadUserData();
      let data: profileStateModel={
        firstName: this.userList.firstName,
        lastName:  this.userList.lastName,
        userImg: this.userList.profileImage
      }
     // this.store.dispatch(changeProfileAction({profile: data}))
     setTimeout(() => {
      this.UpdateUser(data)
     }, 1000);
      
    },
    (error) => {
      if (error.status == 401) {
        this.accountService.doLogout();
        this.router.navigateByUrl('/login');
      }
      console.log('Error in Add Image: ' + error.message);
      this.imagesLoading = false;
      // this.errorMessage = '"Only PNG and JPG Images can be uploaded"';
    }
  );
 
}
OnUploadFile() { 
   //Upload file here send a binary data
}
showImg(img:any){
  Swal.fire({
    imageUrl:  (img),
    imageWidth: 700,
    imageHeight: 500,
    width: '800px',
 toast:true,
 timerProgressBar: true,
 timer: 3000,
didOpen: (toast) => {
  toast.addEventListener('mouseenter', Swal.stopTimer)
  toast.addEventListener('mouseleave', Swal.resumeTimer)
}
  })}
}
