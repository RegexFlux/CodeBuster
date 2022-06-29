import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { BuyButtonComponent } from './components/buttons/buy-button/buy-button.component';
import {SearchModule} from "./modules/search/search.module";
import {IconModule} from "./modules/icon/icon.module";
import {MaterialModule} from "./modules/material/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslationModule} from "./modules/translation/translation.module";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BuyButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SearchModule,
    IconModule,
    MaterialModule,
    TranslationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
