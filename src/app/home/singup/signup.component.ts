import { PlatformDetectorService } from './../../core/platform/platform-detector.service';
import { ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from './signup.service';
import { NewUser } from './new-user';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit{

  signupForm: FormGroup | any;
  @ViewChild('emailInput') emailInput?: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder,
    private UserNotTakenValidatorService: UserNotTakenValidatorService,
    private SignUpService: SignUpService,
    private router:Router,
    private platformDetectorService: PlatformDetectorService ) {}

  ngOnInit(): void {

      this.signupForm = this.formBuilder.group({
          email: ['',
              [
                  Validators.required,
                  Validators.email
              ]
          ],
          fullName: ['',
              [
                  Validators.required,
                  Validators.minLength(2),
                  Validators.maxLength(40)
              ]
          ],
          userName: ['',
              [
                  Validators.required,
                  lowerCaseValidator,
                  Validators.minLength(2),
                  Validators.maxLength(30)
              ],
              this.UserNotTakenValidatorService.checkUserNameTaken()
          ],
          password: ['',
              [
                  Validators.required,
                  Validators.minLength(8),
                  Validators.maxLength(14)
              ]
          ]
      });

      this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput?.nativeElement.focus();

  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.SignUpService
        .signup(newUser)
        .subscribe(
          () => this.router.navigate(['']),
          err => console.log(err)
        );
  }

 }
