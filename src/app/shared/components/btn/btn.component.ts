import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  @Input() route!: string;
  @Input() texte!: string;
  @Input() link!: string;
  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();
  // event
  // Observable
  // Ne doit pas etre init avec aucun flux de données
  // observable chaud
  constructor() {}

  ngOnInit(): void {}

  public doAction(): void {
    this.clicked.emit();
  }
}
