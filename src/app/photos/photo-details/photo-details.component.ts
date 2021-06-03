import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/components/alert/alert.service';
import { Observable } from 'rxjs';
import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Photo } from '../photo/photo';
import { PhotoComment } from '../photo/photo.comment';

@Component({
    templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit{

  photo$: Observable<Photo> = new Observable<Photo>();
  photoId: number | any;



  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
    ) {}

    ngOnInit(): void {
      this.photoId = this.route.snapshot.params.photoId;
      this.photo$ = this.photoService.findById(this.photoId);
      this.photo$.subscribe(() => {}, err => {
          console.log(err);
          this.router.navigate(['not-found']);
      });
  }

    remove(): void {
      this.photoService
      .removePhoto(this.photoId)
      .subscribe(
        () => {
          this.alertService.success('Photo removed', true);
          this.router.navigate(['/user', this.userService.getUserName()], { replaceUrl: true });
        },
        err => {
          console.log('erro');
          this.alertService.warning('Could not delete photo!', true);
        });
    }

    like(photo: Photo) {
      this.photoService
      .like(photo.id)
      .subscribe(liked => {
          if(liked) {
              this.photo$ = this.photoService.findById(photo.id);
          }
      });
  }
}
