import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  errorMessage : string = "";

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private router: Router, private accountService: AccountService) { 
   // this.gotoDashboard();
   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      IsWebPortal:[true]
    });
  }
  onSubmit() { 
    if (this.loginForm.valid) { 
      this.errorMessage="";
       this.accountService.login(this._loginValues()).subscribe(() => {
       this.router.navigateByUrl('/home'); 
           
        }, (error) => {  
        this.errorMessage = "Error: Invalid Email or Password." ; 
      });

    }
  }
  _loginValues() {

    return this.loginForm.value;
  }

}
