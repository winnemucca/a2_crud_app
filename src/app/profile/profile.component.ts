import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;

  constructor(
    private userAuth: UserAuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.userAuth.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
