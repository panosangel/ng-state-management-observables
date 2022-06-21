import { Component, OnInit } from '@angular/core';

import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    protected store: StoreService,
  ) {
  }

  ngOnInit() {
    this.store.order.updateOrderDetails({
      id: 'SKU.1234',
      title: 'Brave New World',
      description: 'What a come-back for the Maidens!'
    });
  }
}
