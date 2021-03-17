import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private icon: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.icon.addSvgIcon("juejin",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/juejin.svg')
    )
    this.icon.registerFontClassAlias('fontawesome', 'fa');
  }

}
