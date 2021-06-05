import { RouterModule } from '@angular/router';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorHandler } from './global-error-handler/global-erro-handler';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NotFoundComponent,
    GlobalErrorComponent

  ],
  providers: [
    {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
    }
  ]
})
export class ErrorsModule { }
