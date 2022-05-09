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

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    const checks = localStorage.getItem(CheckStatus.PENDING)
    const today = new Date();
    today.setHours(23, 59, 59)
    if (checks) {
      const stored: CheckModel[] = JSON.parse(checks);
      this.pendings = stored.filter(c => (new Date (c.date)).getTime() <= today.getTime());
      this.checks=stored.filter(c=>!this.pendings.find(p=>c.id==p.id))
    }
  }

  removeCheck(ck: CheckModel) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: { message: 'Desea dar este cheque por cobrado?' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.checks = this.checks.filter(check => check.id !== ck.id);
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
