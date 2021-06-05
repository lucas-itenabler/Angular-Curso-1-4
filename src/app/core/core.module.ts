import { ShowIfLoggedModule } from './../shared/directives/show-if-logged/show-if-logged.module';
import { MenuModule } from './../shared/components/menu/menu.module';
import { LoadingModule } from './../shared/components/loading/loading.module';
import { AlertModule } from './../shared/components/alert/alert.module';
import { FooterComponent } from './footer/footer.component';
import { RequestInterceptor } from './auth/request.interceptor';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent],
  exports: [
    HeaderComponent,
    FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    AlertModule,
    LoadingModule,
    MenuModule,
    ShowIfLoggedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})

export class CoreModule { }
