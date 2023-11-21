import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { MessagesBWUsers, UserWithLastMessage,} from '../../Models/visitor/Messages-model';
import { AccountService } from 'src/app/services/account/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { ProductService } from 'src/app/services/visitor/product.service';
import { UserData } from '../../Models/dashboard-model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  userToId: any = "";
  addMessageForm!: FormGroup;
  ProductFormData: FormData = new FormData();
  selectedUserName: any = '';
  selectedFile: File;
  formData: FormData = new FormData()
  selectedUserTime: any = '';
  selectedUserImg: any = '';
  messageText: string = "";
  UserId: any = "";
  isOnline: boolean = false;
  userWithLastMessage: UserWithLastMessage[] = [];
  messagesBWUsers: MessagesBWUsers[] = [];
  isLoading: boolean = false;
  isLoading2: boolean = false;
  eventInterval: any;
  addProductImages: any[]=[];
  userData: UserData = {
    userId: '',
    name: '',
    profileImage: './assets/Images/userimg.png',
    firstName: '',
    lastName: '',
    email: '',
    userName: 'No Name',
    phoneNumber: +920000000,
    address: '',
    whatsAppNumber: 0,
  };
  constructor(
    private messageService: MessagesService,
    private accountService: AccountService,private route:ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder
  ) {
    const routeParams = this.route.snapshot.paramMap;
    this.userToId = routeParams.get('userId');
    if (this.userToId === 'Admin' || this.userToId === 'User') { this.userToId = '' }
  }
  ngOnInit(): void {
    this.isLoading2 = true
    this.loadConnectedUsers();
    this.GetMessagesByUserId(this.userToId, null);
    this.addMessageModal();
    this.eventInterval = setInterval(
      () => {
        this.GetMessagesByUserId(this.userToId, 1);
      },
      6000,
      []
    );
  }
  ngOnDestroy(): void {
    clearTimeout(this.eventInterval);
  }
  loadConnectedUsers() {
    this.messageService.GetConnectedUsersWithLastMessage().subscribe((data) => {
      this.isLoading2 = false
      var dt = data.data;
      for (let a = 0; a < dt.length; a++) {
        let user: UserWithLastMessage = {
          userId: dt[a].userId,
          lastText: dt[a].lastText,
          lastConnectedDate: dt[a].lastConnectedDate,
          firstName: dt[a].firstName,
          lastName: dt[a].lastName,
          profileImage: dt[a].profileImage == null ? "assets/Images/userimg.png" : dt[a].profileImage
        }
        this.userWithLastMessage.push(user);

      }
    }, (error) => {
      if (error.status == 401) {
        this.accountService.doLogout();
        this.accountService.UpdateUserForLastSeen();
        this.router.navigateByUrl('/');
      }
      console.log("Error in getOperative: " + error.message);
    });
  }

  GetMessagesByUserId(userId: any, selectUser: any) {


    this.userToId = userId;
    this.messageService.GetMessagesByUserId(this.userToId).subscribe((data: any) => {

      this.selectedUserName = data.data.firstName + " " + data.data.lastName
      this.selectedUserTime = "Last active " + data.data.lastOnlineTime
      this.selectedUserImg = data.data.profileImage == null ? "assets/Images/userimg.png" : data.data.profileImage
      this.isOnline = data.data.isOnline
      var dt = data.data.messageView;
      if ((selectUser == 1 && dt.length > this.messagesBWUsers.length) || selectUser === null) {
        this.messagesBWUsers = []
        for (let a = 0; a < dt.length; a++) {
          let messages: MessagesBWUsers = {
            messageId: dt[a].messageId,
            sentTo: dt[a].sentTo,
            sentFrom: dt[a].sentFrom,
            isCurrentUser: dt[a].isCurrentUser,
            createdDateTime: dt[a].createdDateTime,
            messageText: dt[a].messageText == "null" ? "" : dt[a].messageText,
            imageLink: dt[a].imageLink == null ? "" : dt[a].imageLink
          }
          this.messagesBWUsers.push(messages);
          this.scrollToBottom()
        }
      }
    }, (error) => {
      if (error.status == 401) {
        this.accountService.doLogout();
        this.router.navigateByUrl('/');
      }
      console.log("Error in getOperative: " + error.message);
    });

  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
  addMessageModal() {
    this.addMessageForm = this.formBuilder.group({
      messageText: [],
      imageURL: [],
    });
  }
  onFileUpload(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
    };
    reader.readAsDataURL(this.selectedFile);
    this.ProductFormData.append('Image', this.selectedFile, this.selectedFile.name);
    reader.onload = (_event) => {
      this.addProductImages.push(reader.result);
    }
  }
  onSubmitAddMessage() {
    console.log("value=", this.addMessageForm.value, "---", this.addMessageForm, "-----", this.addMessageForm.value.messageText);
    if (this.addMessageForm.value == null || this.userToId == "" || this.addMessageForm.value.messageText == "") {
      return;
    }
    if (this.addMessageForm.valid || this.addProductImages != null) {
      this.scrollToBottom()
      this.ProductFormData.append('messageText', this.addMessageForm.get('messageText')?.value)
      let b = {
        messageId: '',
        sentTo: '',
        sentFrom: '',
        isCurrentUser: true,
        createdDateTime: Date(),
        messageText: this.addMessageForm.value.messageText == "null" ? "" : this.addMessageForm.value.messageText,
        imageLink: this.addProductImages[0] == null ? "" : this.addProductImages[0]
      }
      this.messagesBWUsers.unshift(b)
      this.addProductImages = []
      let a = this.ProductFormData
      this.addMessageModal();
      this.messageService.CreateMessage(this.userToId, a).subscribe(() => {
        this.GetMessagesByUserId(this.userToId, null);
        this.ProductFormData = new FormData()
      }, (error) => {
        if (error.status == 401) {
          this.accountService.doLogout();
          this.router.navigateByUrl('/');
        }
        console.log("Error in getAssets: " + error.message);
      });
    }
  }
  removeImg(data: any) {
    for (let a = 0; a <= this.addProductImages.length; a++) {
      let index = this.addProductImages.indexOf(data);
      if (this.addProductImages.length == 1) {
        this.addProductImages = []
      }
      if (this.addProductImages[a] == data) {
        this.addProductImages.splice(index, a);
        break
      }
    }
  }  loading() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 1000);
if(window.innerWidth<540){
  var formElement = <HTMLFormElement>document.getElementById('userList');
formElement.style.display = "none"
}
  }

  back(){
    var formElement = <HTMLFormElement>document.getElementById('userList');
    formElement.style.display = "block"
  }
  openImg(data: any) {
    Swal.fire({
      imageUrl: data,
      showConfirmButton: false,
    })
  }
}

