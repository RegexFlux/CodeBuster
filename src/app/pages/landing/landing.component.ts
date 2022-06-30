import {Component, ViewEncapsulation} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent {

  constructor() {
    AOS.init();
  }
}
