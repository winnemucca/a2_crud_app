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

  constructor(
    private userAuth: UserAuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onLogoutClick() {

  }

}
