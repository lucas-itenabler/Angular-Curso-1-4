import { Component } from "@angular/core"

@Component({
    selector: 'ap-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.components.css' ]

})
export class MenuComponent {

  isShown = false;

  toggle() {
      this.isShown = !this.isShown;
  }

}
