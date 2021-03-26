import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  public item = new Order();
  public displayForm = false;
  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {}

  public add(item: Order): void {
    this.ordersService.add(item).subscribe((res) => {
      this.router.navigate(['orders']);
    });
  }

  public resetForm(): void {
    this.displayForm = true;
  }
  public continuForm(): void {
    this.item = this.ordersService.tempForm;
    this.displayForm = true;
  }
}
