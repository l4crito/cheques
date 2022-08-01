import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/confirm/confirm.component';
import { CheckModel, CheckStatus } from 'src/app/models/check.model';

@Component({
  selector: 'app-por-cobrar',
  templateUrl: './por-cobrar.component.html',
  styleUrls: ['./por-cobrar.component.scss']
})
export class PorCobrarComponent implements OnInit {
  checks: CheckModel[] = []
  pendings: CheckModel[] = []
  selectedChecks: CheckModel[] = [];
  total = 0;
  totalCheques = 0;
  ganancia = 0;
  totalAdepositar = 0;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    const checks = localStorage.getItem(CheckStatus.PENDING)
    const today = new Date();
    today.setHours(23, 59, 59)
    if (checks) {
      const stored: CheckModel[] = JSON.parse(checks);
      stored.forEach(c => c.selected = false);
      this.pendings = stored.filter(c => (new Date(c.date)).getTime() <= today.getTime());
      this.checks = stored.filter(c => !this.pendings.find(p => c.id == p.id))
      this.total = stored.map(c => c.value).reduce((a, b) => a + b, 0)
    }
  }

  getSelectedTotal(check: CheckModel) {
    check.selected = !check.selected;
    this.totalCheques = 0;
    this.totalAdepositar = 0;
    this.ganancia = 0;
    this.selectedChecks = this.checks.filter(c => c.selected).concat(this.pendings.filter(c => c.selected));
    this.selectedChecks.forEach(c => {
      this.totalCheques += c.value
      this.ganancia += c.winValue
    })

    this.totalAdepositar = this.totalCheques - this.ganancia
  }


  removeCheck(ck: CheckModel) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: { message: 'Desea dar este cheque por cobrado?' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.checks = this.checks.filter(check => check.id !== ck.id);
        this.pendings = this.pendings.filter(check => check.id !== ck.id);
        ck.status = CheckStatus.PAYED;
        ck.datePayed = new Date();
        localStorage.setItem(CheckStatus.PENDING, JSON.stringify(this.checks));
        const history = localStorage.getItem(CheckStatus.PAYED);
        if (history) {
          const historyToSave = JSON.parse(history)
          historyToSave.unshift(ck);
          localStorage.setItem(CheckStatus.PAYED, JSON.stringify(historyToSave));
        } else {
          localStorage.setItem(CheckStatus.PAYED, JSON.stringify([ck]));
        }
      }
    });
  }
}
