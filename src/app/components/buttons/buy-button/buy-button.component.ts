import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {OrderComponent} from "../../../pages/order/order.component";

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})
export class BuyButtonComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    this.matDialog.open(OrderComponent);
  }
}
