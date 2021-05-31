import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ SignInComponent ],
    imports: [
      ReactiveFormsModule,
      CommonModule,
      VMessageModule,
      RouterModule
    ]
})
export class HomeModule {  }
