import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from 'rxjs';

import { Photo } from "./photo";

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


}
