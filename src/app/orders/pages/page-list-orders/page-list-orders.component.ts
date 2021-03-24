import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public collection!: Order[];
  public title = 'List Orders';
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection.subscribe((flux) => {
      console.log(flux);
    });
  }

  ngOnInit(): void {}

  public translateTitle(): void {
    this.title = 'Liste des commandes';
  }
}
