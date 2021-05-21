import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
  declarations: [ PhotoComponent ], //Seria como por exemplo um atributo privado
  exports: [ PhotoComponent ] //Acessível para quem importar o módulo
})
export class PhotosModule{}
