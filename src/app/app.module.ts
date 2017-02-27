import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CaffeineLibraryComponent } from './caffeine-library/caffeine-library.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AlertModule } from 'ng2-bootstrap';

import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    CaffeineLibraryComponent,
    UserComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
