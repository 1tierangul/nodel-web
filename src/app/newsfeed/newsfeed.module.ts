import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedPageComponent } from './newsfeed-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NewsfeedPageComponent
  ],
  providers: [],
  exports: [
    NewsfeedPageComponent
  ]
})
export class NewsfeedModule { }
