import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from 'rxjs';

import { Photo } from "./photo";
import { PhotoComment } from "./photo.comment";

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root' })
export class PhotoService {
  listFromUserPaginated(userName: string, page:number): Observable<Photo[]> {
    return this.http.get<Photo[]>(API + '/' + userName + '/photos');
  }

  constructor(private http: HttpClient){}


  listFromUser(userName: string){
    return this.http
    .get<Photo[]>(API + '/' + userName + '/photos');

  }

  upload(description: string, allowComments: boolean, file: File) {

    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(API + '/photos/upload', formData);
  }

  findById(photoId: number) {

    return this.http.get<Photo>(API + '/photos/' + photoId);
  }

  getComments(photoId: number) {
      return this.http.get<PhotoComment[]> (API + '/photos/' + photoId + '/comments');
  }

  addComment(photoId: number, commentText: string) {

    return this.http.post(
        API + '/photos/' + photoId + '/comments',
        { commentText}
    );
  }

  removePhoto(photoId: number) {
    return this.http.delete(API + '/photos/' + photoId);
  }

}
