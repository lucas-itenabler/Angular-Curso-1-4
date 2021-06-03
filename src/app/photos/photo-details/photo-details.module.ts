import { ShowIfLoggedDirective } from './../../shared/directives/show-if-logged/show-if-logged.directive';
import { PhotoOwnerOnlyDirective } from './photo.owner-only/photo.owner-only.directive';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { NgModule } from "@angular/core";
import { PhotoDetailsComponent } from "./photo-details.component";
import { CommonModule } from "@angular/common";
import { PhotoModule } from "../photo/photo.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { ShowIfLoggedModule } from './../../shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
    declarations:[
      PhotoDetailsComponent,
      PhotoCommentsComponent,
      PhotoOwnerOnlyDirective
    ],
    exports: [
      PhotoDetailsComponent,
      PhotoCommentsComponent],
    imports: [
      CommonModule,
      PhotoModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      VMessageModule,
      ShowIfLoggedModule
    ]
})
export class PhotoDetailsModule { }
