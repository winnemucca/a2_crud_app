import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user/user-auth.service'; // move this to a shared services folder;
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  constructor(
    private userAuth: UserAuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.userAuth.authenticateUserLogin(user).subscribe(data => {
      if (data.success) {
        this.userAuth.storeUserData(data.token, data.user);
        this.router.navigate(['/dashboard']);
      } else {
        console.log('no bueno'); // add validation messages
      }
    });
  }

}
