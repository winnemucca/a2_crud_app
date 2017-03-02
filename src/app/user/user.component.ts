import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserAuthService } from './user-auth.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private authService: UserAuthService) { }

  ngOnInit() {
    const first_name = new FormControl();
    const last_name = new FormControl();
    const email = new FormControl();
    const password = new FormControl();
    this.signUpForm = new FormGroup({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
    });
  }

  registerUser(formValues) {
     this.authService.signUpUser(formValues.first_name, formValues.last_name, formValues.email, formValues.password);
   console.log('clicked');
  }

}
