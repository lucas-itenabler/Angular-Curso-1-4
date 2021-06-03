import { UserService } from './../../../core/user/user.service';
import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { Photo } from "../../photo/photo";
import { Input } from "@angular/core";

@Directive({
    selector :'[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit{

    @Input() ownedPhoto: Photo | any;

    constructor(
      private element: ElementRef<any>,
      private renderer: Renderer2,
      private UserService: UserService
    ) {}
  ngOnInit(): void {
    this.UserService
            .getUser()
            .subscribe(user => {
              if (!user || user?.id !== this.ownedPhoto?.userId) {
                this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
                  }
            });
  }
}
