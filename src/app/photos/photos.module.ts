import { PhotoDetailsModule } from './photo-details/photo-details.module';
import { DarkenOnHoverModule } from './../shared/directives/darken-on-hover/darken-on-hover.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form-module';
import { PhotoModule } from './photo/photo.module';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';


@NgModule({
   imports:
   [
     PhotoModule,
     PhotoFormModule,
     PhotoListModule,
     DarkenOnHoverModule,
     PhotoDetailsModule
  ]
})
export class PhotosModule{}
