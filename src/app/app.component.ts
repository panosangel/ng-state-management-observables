import { Component, OnInit } from '@angular/core';

import { OrderStoreService } from '../store/order.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    protected orderStore: OrderStoreService,
  ) {
  }

  ngOnInit() {
    this.orderStore.updateOrderDetails({
      id: 'SKU.1234',
      title: 'Brave New World',
      description: 'What a come-back for the Maidens!'
    });
  }
}
