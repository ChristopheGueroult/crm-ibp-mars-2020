import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  public item = new Order();
  constructor(private ordersService: OrdersService) {
    console.log(this.item);
  }

  ngOnInit(): void {}

  public add(item: Order): void {
    this.ordersService.add(item).subscribe((res) => {
      console.log(res);
    });
  }
}
