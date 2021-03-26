import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateOrder } from '../enums/state-order.enum';
import { Order } from '../models/order';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([
    new Order(),
  ]);
  private urlApi = environment.urlApi;
  public tempForm!: Order;
  constructor(private http: HttpClient) {
    // this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`);
    this.refreshCollection();
  }

  public refreshCollection() {
    this.http.get<Order[]>(`${this.urlApi}/orders`).subscribe((data) => {
      this.collection$.next(data);
    });
  }

  // get collection
  public get collection(): Subject<Order[]> {
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
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  // delete item in collection
  public delete(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}/orders/${id}`);
  }
  // get item by id in collection
  public getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }
}
