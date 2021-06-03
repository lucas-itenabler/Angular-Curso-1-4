import { PhotoOwnerOnlyDirective } from './photo.owner-only/photo.owner-only.directive';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { NgModule } from "@angular/core";
import { PhotoDetailsComponent } from "./photo-details.component";
import { CommonModule } from "@angular/common";
import { PhotoModule } from "../photo/photo.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";

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
      VMessageModule
    ]
})
export class PhotoDetailsModule { }
