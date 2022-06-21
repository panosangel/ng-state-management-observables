import { Injectable } from '@angular/core';

import { OrderStoreService } from './order.store';

@Injectable({
  providedIn: 'root',
})
export class StoreService {

  constructor(
    public order: OrderStoreService
  ) {
  }

}
