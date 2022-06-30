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
import {OrderComponent} from "./pages/order/order.component";
import {CustomSelectComponent} from "./components/forms/custom-select/custom-select.component";
import {OrderInfoComponent} from "./components/order/order-info/order-info.component";
import {OrderSelectionComponent} from "./components/order/order-selection/order-selection.component";
import {CustomInputComponent} from "./components/forms/custom-input/custom-input.component";
import {InputOptionalComponent} from "./components/forms/input-optional/input-optional.component";
import {CartComponent} from "./components/cart/cart.component";
import {CustomCheckboxComponent} from "./components/forms/custom-checkbox/custom-checkbox.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BuyButtonComponent,
    CustomSelectComponent,
    OrderComponent,
    OrderInfoComponent,
    OrderSelectionComponent,
    CustomInputComponent,
    InputOptionalComponent,
    CartComponent,
    CustomCheckboxComponent
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
