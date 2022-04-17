import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CheckModel, CheckStatus } from 'src/app/models/check.model';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  checks:CheckModel[]=[]
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    const checks=localStorage.getItem(CheckStatus.PAYED)
    if(checks){
      this.checks=JSON.parse(checks);
    }
  }

}
