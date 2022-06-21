import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { OrderDetails } from '../domain/order-details.model';
import { Store } from '../domain/store.model';

export interface OrderState {
  orderDetails: OrderDetails | null;
}

const initialState: OrderState = {
  orderDetails: null,
}

@Injectable({
  providedIn: 'root',
})
export class OrderStoreService extends Store<OrderState> {

  // Selectors

  readonly orderDetails$ = this.state$.pipe(map((orderState: OrderState) => orderState.orderDetails));

  constructor() {
    super(initialState);
  }

  // Actions calling API

  updateOrderDetails(orderDetails: OrderDetails): void {
    this.setState({
      ...this.state,
      orderDetails
    });
  }
}
