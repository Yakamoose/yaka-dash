import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleDotLoaderComponent } from './circle-dot-loader/circle-dot-loader.component';



@NgModule({
  declarations: [CircleDotLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CircleDotLoaderComponent
  ]
})
export class AnimationsModule { }
