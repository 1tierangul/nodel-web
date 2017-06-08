import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginPageComponent
  ],
  providers: [],
  exports: [
    LoginPageComponent
  ]
})
export class LoginModule { }
