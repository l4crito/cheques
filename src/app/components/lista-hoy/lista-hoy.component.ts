import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckModel } from '../../models/check.model';

@Component({
  selector: 'app-lista-hoy',
  templateUrl: './lista-hoy.component.html',
  styleUrls: ['./lista-hoy.component.scss']
})
export class ListaHoyComponent implements OnInit {
  @Input() checks: CheckModel[];
  @Input() icon = 'delete_outline';
  @Input() hideEvent = false;
  @Output() removeCheck: EventEmitter<CheckModel> = new EventEmitter<CheckModel>();
  @Output() selectCheck: EventEmitter<CheckModel> = new EventEmitter<CheckModel>();

  constructor() { }

  ngOnInit() {
  }

  remove(evt: any, check: CheckModel) {
    evt.stopImmediatePropagation();
    this.removeCheck.emit(check);
  }


}
