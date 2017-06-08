import { RouterModule, Routes } from '@angular/router';
import { NewsfeedPageComponent } from './newsfeed/newsfeed-page.component';
import { LoginPageComponent } from './login/login-page.component';

export const appRoutes: Routes = [
  { path: '', component: NewsfeedPageComponent },
  { path: 'login', component: LoginPageComponent },
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);
