import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user/user-auth.service';
import { Router } from '@angular/router';
 // move this to a shared services folder;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isIn = false;

  constructor(
    private userAuth: UserAuthService,
    private router: Router
    ) { }

  ngOnInit() {

  }

  toggleState() { // click handler for navbar toggle
    const bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

  onLogoutClick() {
    this.userAuth.logOut();
    console.log('you are logged out');
    this.router.navigate(['/login']);
    return false;
  }

}
