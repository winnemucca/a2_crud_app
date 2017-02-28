import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
    {path: 'userLogin', component: UserComponent},
    {path: 'home', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent}
];
