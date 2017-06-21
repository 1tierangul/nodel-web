import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginModule } from './login/login.module';
import { NewsfeedModule } from './newsfeed/newsfeed.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { requestOptionsProvider } from './default-request-options.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    NewsfeedModule,
    AppRoutingModule
  ],
  providers: [
    requestOptionsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
