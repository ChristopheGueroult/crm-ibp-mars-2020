import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';
/**
 * form used in add order and edit order
 */
@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  @Input() init!: Order;
  @Output() submited: EventEmitter<Order> = new EventEmitter<Order>();
  public form!: FormGroup;
  public states = Object.values(StateOrder);
  constructor(private fb: FormBuilder, private ordersService: OrdersService) {}

  ngOnInit(): void {
    if (this.ordersService.tempForm) {
      this.init = this.ordersService.tempForm;
    }
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta, Validators.required],
      client: [
        this.init.client,
        [Validators.required, Validators.minLength(2)],
      ],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  public formSubmit(): void {
    this.submited.emit(this.form.value);
  }

  ngOnDestroy(): void {
    this.ordersService.tempForm = this.form.value;
  }
}
