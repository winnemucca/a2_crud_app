import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from './user-auth.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  signUpForm: FormGroup;
  private first_name: FormControl;
  private last_name: FormControl;
  private email: FormControl;
  private password: FormControl;
  constructor(private authService: UserAuthService) { }

  ngOnInit() {
    this.first_name = new FormControl(Validators.required);
    this.last_name = new FormControl(Validators.required);
    this.email = new FormControl(Validators.required);
    this.password = new FormControl(Validators.required);
    this.signUpForm = new FormGroup({
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password
    });
  }

  registerUser(formValues) {
     this.authService.signUpUser(formValues.first_name, formValues.last_name, formValues.email, formValues.password);
   console.log('clicked');
  }

  validateLastName() {
    return this.last_name.invalid || this.last_name.untouched;
  }

  validateFirstName() {
        return this.first_name.invalid || this.first_name.untouched;
  }
  validateEmail() {
        return this.email.invalid || this.email.untouched;
  }
  validatePassword() {
        return this.password.invalid || this.password.untouched;
  }

}
