import { Component, OnInit } from '@angular/core';
import { CheckModel, CheckStatus } from 'src/app/models/check.model';

@Component({
  selector: 'app-por-cobrar',
  templateUrl: './por-cobrar.component.html',
  styleUrls: ['./por-cobrar.component.scss']
})
export class PorCobrarComponent implements OnInit {
  checks:CheckModel[]=[]
  constructor() { }

  ngOnInit() {
    const checks=localStorage.getItem(CheckStatus.PENDING)
    if(checks){
      this.checks=JSON.parse(checks);
    }
  }

}
