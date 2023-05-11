import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations"
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CreateAcommodationComponent } from './create-acommodation/create-acommodation/create-acommodation.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select"
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Temp2Component } from './temp2/temp2.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
    {
        path: 'admin', 
        children: [
            {
                path: 'createAcommodation',
                component: CreateAcommodationComponent,
            },
        ],
        data: {roles:['Admin']}
        
    }]

@NgModule({
  declarations: [
    CreateAcommodationComponent,
    Temp2Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //NoopAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
})
export class AdminModule { }