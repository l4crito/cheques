import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { CheckModel, CheckStatus } from '../../models/check.model';
import { round } from '../../utils/functions';
import { v1 as uuid } from 'uuid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-nuevo-cheque',
  templateUrl: './nuevo-cheque.component.html',
  styleUrls: ['./nuevo-cheque.component.scss']
})
export class NuevoChequeComponent implements OnInit {
  @Output() emitCheck: EventEmitter<CheckModel> = new EventEmitter<CheckModel>();
  @ViewChild('txtPerson',{static:true}) txtPerson: ElementRef;
  @Input() checks: CheckModel[];
  filteredOptions: Observable<string[]>;
  check: CheckModel = { winValue: 0 };
  form: FormGroup;
  persons:string[]=[];
  constructor(private formBuilder: FormBuilder) {
   
  }

  ngOnInit() {
    this.initForm();
    this.clear();
    this.form.valueChanges.subscribe((val: CheckModel) => {
      this.check = val;
      this.calcWinRate();
    });
    this.getClients();
    this.filteredOptions = this.form.controls.person.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }


  private _filter(value: string): string[] {
    if(value.length<3){
      return [];
    }
    const filterValue = value.toUpperCase();
    return this.persons.filter(option => option.includes(filterValue));
  }

   async getClients(){
    const pendings = localStorage.getItem(CheckStatus.PENDING)
    if (pendings) {
      const stored: CheckModel[] = JSON.parse(pendings);
      const clients:string[]=stored.map(check=>check.person);
      this.persons.push(...clients);
    }
    const payed = localStorage.getItem(CheckStatus.PAYED)
    if (payed) {
      const stored: CheckModel[] = JSON.parse(payed);
      const clients:string[]=stored.map(check=>check.person);
      this.persons.push(...clients);
    }
    this.persons=[...new Set(this.persons)];
  }

  calcWinRate() {
    const value = this.check.value ? this.check.value : 0;
    const rate = this.check.rate ? this.check.rate : 0;
    let days = this.getDifDays(new Date(), new Date(this.check.date));
    days = this.check.date ? days : 1;
    const dayEarning = round(((rate * value / 100)) / 30, 2);
    this.check.winValue = round(days * dayEarning, 2);
  }


  getDifDays(checkDay: any, now: any) {
    const diffTime = Math.abs(checkDay - now);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  addCheck() {
    this.check.id = uuid();
    this.check.person=this.check.person.toUpperCase();
    this.check.status=CheckStatus.PENDING;
    this.emitCheck.emit(this.check);
    this.clear();
  }

  initForm() {
    this.form = this.formBuilder.group({
      value: ['', [Validators.required,Validators.min(0.01)]],
      rate: ['', [Validators.required]],
      person: ['', [Validators.required]],
      date: [new Date, [Validators.required]],
      
    });
  }

  clear() {
    this.form.controls.value.setValue('');
    this.form.controls.person.setValue('');
    this.form.controls.rate.setValue(4);
    this.form.controls.date.setValue(new Date());
    // this.txtPerson.nativeElement.focus();
  }



}
