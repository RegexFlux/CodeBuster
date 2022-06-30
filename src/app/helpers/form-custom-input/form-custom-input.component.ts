import {Component, Input, OnInit} from '@angular/core';
import {InputInterface} from "../../interfaces/input";
import {FormConfig} from "../../interfaces/form";
import {takeUntil} from "rxjs";
import {SubscriptionComponent} from "../subscription/subscription.component";

@Component({
  template: ``
})
export abstract class FormCustomInputComponent extends SubscriptionComponent implements OnInit {

  @Input('inputConfig') config!: InputInterface;
  @Input('formConfig') formConfig?: FormConfig;

  ngOnInit(): void {
    if (this.formConfig && this.config.handleChanges) {
      this.formConfig.formControl.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((
        // @ts-ignore
        (event) => this.config.handleChanges(event)
      ))
    }
  }

  handleChanges(value: any) {
    if (this.config.handleChanges) {
      this.config.handleChanges(value);
    }
  }

}
