import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './404component/404component.component';
import { CaffeineLibraryComponent } from './caffeine-library/caffeine-library.component';
import { ProfileComponent } from './profile/profile.component';
import {LoginComponent } from './login/login.component';
export const appRoutes: Routes = [
    { path: 'signUp', component: UserComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'library', component: CaffeineLibraryComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
