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

import {ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';

import { ToastCustomOptions } from './shared/common/toastr.service';
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ToastModule,
    // PaginationModule.forRoot(),
    Ng2PaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CaffeineListService, 
    UserAuthService, 
    AuthGuard,
    {provide: ToastOptions, useClass: ToastCustomOptions},
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
