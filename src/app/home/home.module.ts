import { SignUpComponent } from './singup/signup.component';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      SignInComponent,
      SignUpComponent ],
    imports: [
      ReactiveFormsModule,
      CommonModule,
      FormsModule,
      VMessageModule,
      RouterModule
    ]
})
export class HomeModule {  }
