import { Component } from '@angular/core';
import { CheckModel } from './models/check.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cheques';
  checks: CheckModel[] = [];
  totalCheques = 0;
  ganancia = 0;
  totalAdepositar = 0;
  constructor() { }

  addCheck(check: CheckModel) {
    this.checks.push(check);
    this.calcTotals();
  }
  removeCheck(ck: CheckModel) {
    this.checks = this.checks.filter(check => check.id !== ck.id);
    this.calcTotals();
  }

  calcTotals() {
    this.totalCheques = 0;
    this.ganancia = 0;
    this.totalAdepositar = 0;
    this.checks.forEach(check => {
      this.totalCheques += check.value;
      this.ganancia += check.winValue;
    });
    this.totalAdepositar = this.totalCheques - this.ganancia;
  }

}
