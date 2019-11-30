import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CheckModel } from '../../models/check.model';
import { round } from '../../utils/functions';
import { v1 as uuid } from 'uuid';

@Component({
  selector: 'app-nuevo-cheque',
  templateUrl: './nuevo-cheque.component.html',
  styleUrls: ['./nuevo-cheque.component.scss']
})
export class NuevoChequeComponent implements OnInit {
  @Output() emitCheck: EventEmitter<CheckModel> = new EventEmitter<CheckModel>();
  @Input() checks: CheckModel[];
  value: number;
  rate = 5;
  date: string;
  winValue = 0;
  constructor() { }

  ngOnInit() {
  }

  calcWinRate() {
    const value = this.value ? this.value : 0;
    const rate = this.rate ? this.rate : 0;
    let days = this.getDifDays(new Date(), new Date(this.date));
    days = days ? days : 1;
    const dayEarning = round(((rate * value / 100)) / 30, 2);
    this.winValue = round(days * dayEarning, 2);
  }


  getDifDays(checkDay: any, now: any) {
    const diffTime = Math.abs(checkDay - now);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  addCheck() {
    const check: CheckModel = {
      id: uuid(),
      date: this.date,
      person: 'x',
      rate: this.rate,
      value: this.value,
      winValue: this.winValue
    };
    this.emitCheck.emit(check);
    this.date = null;
    this.rate = 5;
    this.winValue = 0;
    this.value = null;
  }

  disableButton(): boolean {
    if (!this.date || !this.rate || !this.value) {
      return true;
    }
    return false;
  }

}
