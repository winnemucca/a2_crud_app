import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CaffeineLibraryComponent } from './caffeine-library/caffeine-library.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';

// third party Libraries
// import { AlertModule, PaginationModule } from 'ng2-bootstrap';
import {Ng2PaginationModule} from 'ng2-pagination'; //importing ng2-pagination


import { TOASTR_TOKEN, Toastr } from './shared/common/toastr.service';
import { CollapsiblePanelComponent } from './shared/common/collapsible-panel';

import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './404component/404component.component';

import { CaffeineListService } from './caffeine-library/caffeine-list.service';
import { UserAuthService } from './user/user-auth.service';
// import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './shared/guards/auth.guards';

import { SearchPipe } from './shared/common/search.pipe';

declare let toastr : Toastr;


@NgModule({
  declarations: [
    AppComponent,
    CaffeineLibraryComponent,
    UserComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    FooterComponent,
    PageNotFoundComponent,
    // ProfileComponent,
    LoginComponent,
    CollapsiblePanelComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // PaginationModule.forRoot(),
    Ng2PaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CaffeineListService, 
    // { provide: TOASTR_TOKEN, useValue: toastr },
    UserAuthService, 
    AuthGuard,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
