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
  // reactive form will return to refactor
  // signUpForm: FormGroup;
  // private username: FormControl;
  // private email: FormControl;
  // private password: FormControl;
  username: String;
  email: String;
  password: String;

  constructor(private authService: UserAuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(formValues) {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    if (!this.authService.authenticateUser(user)) {
      console.log('please fill in all fields');
      return false;
    }

    if (!this.authService.validateEmail(user.email)) {
      console.log('please use a valid email');
      return false;
    }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        console.log('your now registered');
        this.router.navigate(['/dashboard']);
      } else {
        console.log('registration wrong');
      }
    });
  }
  // validateusername() {
  //   return this.username.valid || this.username.untouched;
  // }
  // validateEmail() {
  //       return this.email.valid || this.email.untouched;
  // }
  // validatePassword() {
  //       return this.password.valid || this.password.untouched;
  // }

}

