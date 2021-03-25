import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateOrder } from '../enums/state-order.enum';
import { Order } from '../models/order';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private collection$: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`);
  }

  // get collection
  public get collection(): Observable<Order[]> {
    return this.collection$;
  }

  // change state item
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    // item.state = state;
    const obj = { ...item };
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }
  // add item in collection

  // delete item in collection

  // get item by id in collection
}
