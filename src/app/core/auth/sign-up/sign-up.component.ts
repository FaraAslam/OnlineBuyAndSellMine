import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm!: FormGroup;
  submitted = false;
  errorMessage : string = "";
  IsSuccessAccountCreated: boolean = false;


  constructor(private formBuilder: FormBuilder, private router: Router, private accountService: AccountService) { 
   
   }

   ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      Email: ['', [Validators.required]],
      Password: ['',[Validators.required , Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      ConfirmPassword: ['',[Validators.required]],
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]], 
      //acceptTerms: [true, Validators.requiredTrue]
    });
    this.signupForm.valueChanges.subscribe(field => {
       
      if (field.Password !== field.ConfirmPassword) {
        this.signupForm.setErrors({ mismatch: true });
      } else {
        this.signupForm.setErrors(null);
      }
    });
  }
  onSubmit() {
    
    if (this.signupForm.valid) {
      this.errorMessage = "";
      this.accountService.UserSignUp(this.signupForm.value).subscribe(() => {
        this.IsSuccessAccountCreated = true;
        this.signupForm.reset();
        this.router.navigateByUrl('/home'); 
      }, (error) => {
        if (error.status == 500) {
          this.errorMessage = "Opps! PhoneNumber is already exist and please chose another PhoneNumber."
        }
       
      });
    }
    
    else {
      this.errorMessage = "Please fill the form!.";
    }
  }

}
