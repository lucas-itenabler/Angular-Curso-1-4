import { SignUpService } from './signup.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, map, switchMap, first } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UserNotTakenValidatorService {

  constructor(private SignUpService: SignUpService) { }

  checkUserNameTaken() {

    return (control: AbstractControl) => {
      return control
        .valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap((userName: string) =>
          this.SignUpService.checkUserNameTaken(userName)
        ))
        .pipe(map((isTaken) => isTaken ? {userNameTaken: true} : null))
        .pipe(first());
    }
  }
}
