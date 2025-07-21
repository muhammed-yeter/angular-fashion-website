import { Injectable } from '@angular/core';
import { PaymentItem } from './basketitem-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders: PaymentItem[] = [];

  addOrder(order: PaymentItem): Observable<string> {
    this.orders.push(order);
    return of('Order added to list Successfully.');
  }
}
