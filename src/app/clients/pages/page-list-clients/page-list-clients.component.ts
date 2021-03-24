import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  public collection!: Client[];
  public title = 'List  Clients';
  constructor(private clientsService: ClientsService) {
    this.clientsService.collection.subscribe((data) => {
      this.collection = data;
    });
  }

  ngOnInit(): void {}
}
