import {NgModule} from '@angular/core';
import {OrderComponent} from "../../pages/order/order.component";
import {OrderInfoComponent} from "../../components/order/order-info/order-info.component";
import {OrderSelectionComponent} from "../../components/order/order-selection/order-selection.component";
import {MaterialModule} from "../material/material.module";
import {NgxCcModule} from "ngx-cc";
import {SearchModule} from "../search/search.module";
import {IconModule} from "../icon/icon.module";
import {TranslationModule} from "../translation/translation.module";
import {CustomSelectComponent} from "../../components/forms/custom-select/custom-select.component";
import {CustomInputComponent} from "../../components/forms/custom-input/custom-input.component";
import {CustomCheckboxComponent} from "../../components/forms/custom-checkbox/custom-checkbox.component";
import {CustomCardComponent} from "../../components/forms/custom-card/custom-card.component";
import {InputOptionalComponent} from "../../components/forms/input-optional/input-optional.component";
import {CommonModule} from "@angular/common";
import {CartComponent} from "../../components/cart/cart.component";
import {BuyButtonComponent} from "../../components/buttons/buy-button/buy-button.component";


@NgModule({
  declarations: [
    OrderComponent,
    OrderInfoComponent,
    OrderSelectionComponent,
    CustomSelectComponent,
    CustomInputComponent,
    CustomCheckboxComponent,
    CustomCardComponent,
    InputOptionalComponent,
    CartComponent,
    BuyButtonComponent,
  ],
  exports: [
    OrderComponent,
    OrderInfoComponent,
    OrderSelectionComponent,
    CustomSelectComponent,
    CustomInputComponent,
    CustomCheckboxComponent,
    CustomCardComponent,
    InputOptionalComponent,
    CartComponent,
    BuyButtonComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SearchModule,
    IconModule,
    NgxCcModule,
    TranslationModule,
  ]
})
export class OrderModule {
}
