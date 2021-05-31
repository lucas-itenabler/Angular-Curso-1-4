import { HomeRoutingModule } from './home.routing.modules';
import { SignUpService } from './singup/signup.service';
import { SignUpComponent } from './singup/signup.component';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
      SignInComponent,
      SignUpComponent,
      HomeComponent ],
    imports: [
      ReactiveFormsModule,
      CommonModule,
      FormsModule,
      VMessageModule,
      RouterModule,
      HomeRoutingModule
    ],
    providers: [
      SignUpService,
    ]
})
export class HomeModule {  }
