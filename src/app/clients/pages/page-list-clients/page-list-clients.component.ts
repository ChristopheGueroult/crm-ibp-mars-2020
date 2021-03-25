import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  public states = Object.values(StateClient);
  public collection!: Client[];
  public collection$: Observable<Client[]>;
  public title = 'List  Clients';
  public headers = ['Name', 'total ht', 'total ttc', 'state'];
  constructor(private clientsService: ClientsService) {
    this.collection$ = this.clientsService.collection;
    // this.clientsService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
  }

  ngOnInit(): void {}
  changeState(item: Client, event: any): void {
    const state = event.target.value;
    this.clientsService.changeState(item, state).subscribe((res) => {
      console.log(res);
    });
  }
}
