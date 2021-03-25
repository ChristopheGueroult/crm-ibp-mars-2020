import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  // public collection!: Order[];
  public collection$: Observable<Order[]>;
  public title = 'List Orders';
  public states = Object.values(StateOrder);
  public headers = [
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];
  constructor(
    private ordersService: OrdersService,
    private cd: ChangeDetectorRef
  ) {
    this.collection$ = this.ordersService.collection;
    // this.ordersService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
  }

  ngOnInit(): void {}

  public translateTitle(): void {
    this.title = 'Liste des commandes';
  }

  public action(): void {
    console.log('open popo ou open what you want or do want you want');
  }

  changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.ordersService.changeState(item, state).subscribe((res) => {
      item.state = res.state;
      this.cd.detectChanges();
    });
  }
}
