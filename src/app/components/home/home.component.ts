import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckModel, CheckStatus } from 'src/app/models/check.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  title = 'cheques';
  checks: CheckModel[] = [];

  totalCheques = 0;
  ganancia = 0;
  totalAdepositar = 0;
  constructor(private router:Router) { }

  addCheck(check: CheckModel) {
    this.checks.push(check);
    this.checks.sort((a,b)=>a.date.getTime()-b.date.getTime());
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

  save(){
    const pendings=localStorage.getItem(CheckStatus.PENDING);
    if(pendings){
      const pendingsToSave:CheckModel[]=JSON.parse(pendings);
      pendingsToSave.forEach(c=>c.date=new Date(c.date))
      pendingsToSave.push(...this.checks)
      pendingsToSave.sort((a,b)=>a.date.getTime()-b.date.getTime());
      localStorage.setItem(CheckStatus.PENDING,JSON.stringify(pendingsToSave));
      
    }else
    localStorage.setItem(CheckStatus.PENDING,JSON.stringify(this.checks));
    this.router.navigate(['']);
  }

}
