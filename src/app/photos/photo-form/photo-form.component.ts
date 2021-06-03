import { Router } from '@angular/router';
import { PhotoService } from './../photo/photo.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  //styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup = new FormGroup({});;
  file?: File | any;
  preview = '';

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router) { }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  handleFile(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files){
      console.log('entrou');
      this.file = target.files[0] as File;
      const reader = new FileReader();
      reader.onload = (eventt: any) => this.preview = eventt.target?.result;
      reader.readAsDataURL(this.file);
      console.log(this.preview);
    }
  }

  upload() {
    const description = this.photoForm.getRawValue();
    const allowComments = this.photoForm.get('allowComments')?.value;
    this.photoService.
      upload(description, allowComments, this.file)
      .subscribe(() => this.router.navigate(['']))
  }

}
