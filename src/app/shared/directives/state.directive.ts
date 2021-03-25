import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]',
})
export class StateDirective implements OnChanges {
  @Input() appState!: string;
  @HostBinding('class') TdClassName!: string;
  constructor() {}
  ngOnChanges(): void {
    this.TdClassName = `state-${this.appState.toLowerCase()}`;
  }
}
// si appState vaut CANCELED => state-canceled
// si appState vaut OPTION => state-option
// si appState vaut CONFIRMED => state-confirmed
// Binder la propriété class du host element td sur lequelle je créé une instance de cette directive avec state-canceled, ....
