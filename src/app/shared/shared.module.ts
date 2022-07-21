import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { MaterialModule } from './module/material/material.module';



@NgModule({
  exports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class SharedModule { }
