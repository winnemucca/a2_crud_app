import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from './user-auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  signUpForm: FormGroup;
  // private first_name: FormControl;
  // private last_name: FormControl;
  private username: FormControl;
  private email: FormControl;
  private password: FormControl;

  constructor(private authService: UserAuthService, private router: Router) { }

  ngOnInit() {
    // this.first_name = new FormControl(
    //   this.authService.newUser.first_name,
    //   Validators.required
    // );
    // this.last_name = new FormControl(
    //   this.authService.newUser.last_name,
    //   Validators.required
    // );
    this.username = new FormControl(
      this.authService.newUser.username,
      Validators.required
    )
    this.email = new FormControl(
      this.authService.newUser.email,
      Validators.required
    );
    this.password = new FormControl(
      this.authService.newUser.password,
      Validators.required
    );
    this.signUpForm = new FormGroup({
      // first_name: this.first_name,
      // last_name: this.last_name,
      username: this.username,
      email: this.email,
      password: this.password
    });
  }

  registerUser(formValues) {
    if (this.signUpForm.valid) {
        this.authService.signUpUser(
          // formValues.first_name,
          // formValues.last_name,
          formValues.username,
          formValues.email,
          formValues.password);
        this.router.navigate(['dashboard']);
    }
   console.log('clicked');
  }

  // validateLastName() {
  //   return this.last_name.valid || this.last_name.untouched;
  // }

  // validateFirstName() {
  //       return this.first_name.valid || this.first_name.untouched;
  // }
  validateusername() {
    return this.username.valid || this.username.untouched;
  }
  validateEmail() {
        return this.email.valid || this.email.untouched;
  }
  validatePassword() {
        return this.password.valid || this.password.untouched;
  }

}
