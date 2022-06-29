import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {customIcons, iconPathFromModule} from "../../constants/icons";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    MatIconModule
  ]
})
export class IconModule {
  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    customIcons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`${iconPathFromModule}${icon.path}`)
      );
    });
  }
}
