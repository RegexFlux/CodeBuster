import {Component, Input, OnInit} from '@angular/core';
import {NavigationButton} from "../../../interfaces/button";

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent implements OnInit {

  @Input ('navigationConfig') config!: NavigationButton;
  constructor() { }

  ngOnInit(): void {
  }

}
