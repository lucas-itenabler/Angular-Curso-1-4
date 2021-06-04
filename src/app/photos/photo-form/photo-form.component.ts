import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/components/alert/alert.service';
import { Router } from '@angular/router';
import { PhotoService } from './../photo/photo.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  //styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup = new FormGroup({});;
  file?: File | any;
  preview = '';
  percentDone = 0;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private  userService: UserService) { }

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

  upload(event: Event): void{
    let desc = '';
    let allowComments = true;
    desc = this.photoForm.get('description')?.value;
    allowComments = this.photoForm.get('allowComments')?.value;
    console.log(this.file);

    if (this.file){
      this.photoService.upload(desc, allowComments, this.file)
      .pipe(finalize(() => {
        this.router.navigate(['/user', this.userService.getUserName()]);
      }))
      .subscribe(
        (event?: any) => {
          if (event){
            if (event.type == HttpEventType.UploadProgress && event.total) {
              this.percentDone = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse){
              this.alertService.success('Upload complete', true);
            }
          }
        },
        err => {
          console.log('error');
          this.alertService.danger('Upload error!', true);
        });
    }
  }

}
