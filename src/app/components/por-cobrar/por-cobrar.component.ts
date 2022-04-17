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
  checks:CheckModel[]=[]
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    const checks=localStorage.getItem(CheckStatus.PENDING)
    if(checks){
      this.checks=JSON.parse(checks);
    }
  }

  removeCheck(ck: CheckModel) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: {message:'Desea dar este cheque por cobrado?'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.checks = this.checks.filter(check => check.id !== ck.id);
        ck.status=CheckStatus.PAYED;
        ck.datePayed=new Date();
        localStorage.setItem(CheckStatus.PENDING,JSON.stringify(this.checks));
        const history=localStorage.getItem(CheckStatus.PAYED);
        if(history){
          const historyToSave=JSON.parse(history)
          historyToSave.unshift(ck);
          localStorage.setItem(CheckStatus.PAYED,JSON.stringify(historyToSave));
        }else{
          localStorage.setItem(CheckStatus.PAYED,JSON.stringify([ck]));

        }
      }
    });
  }
}
