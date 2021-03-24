import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private collection$!: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    // this.collection$ = this.http.get<Client[]>(`${this.urlApi}/clients`);
    // this.setCollection(this.http.get<Client[]>(`${this.urlApi}/clients`));
    this.collection = this.http.get<Client[]>(`${this.urlApi}/clients`);
  }

  // get collection
  public get collection(): Observable<Client[]> {
    return this.collection$;
  }
  public set collection(col: Observable<Client[]>) {
    this.collection$ = col;
  }

  // public getCollection(): Observable<Client[]> {
  //   return this.collection$;
  // }
  // public setCollection(col: Observable<Client[]>) {
  //   this.collection$ = col;
  // }
}
