import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {
  @Input() totalCheques=0;
  @Input() ganancia=0;
  @Input() totalAdepositar=0;
  constructor() { }

  ngOnInit() {
  }

}
