import {Component, OnDestroy} from '@angular/core';
import {ReplaySubject} from "rxjs";

@Component({
  template: ``
})
export abstract class SubscriptionComponent implements OnDestroy {
  protected destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
