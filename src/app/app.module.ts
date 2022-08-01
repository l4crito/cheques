import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatNativeDateModule } from '@angular/material';
import { NuevoChequeComponent } from './components/nuevo-cheque/nuevo-cheque.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaHoyComponent } from './components/lista-hoy/lista-hoy.component';
import { registerLocaleData } from '@angular/common';
import localeEc from '@angular/common/locales/es-US';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import {MatBadgeModule} from '@angular/material/badge';
import { HistorialComponent } from './components/historial/historial.component';
import { PorCobrarComponent } from './components/por-cobrar/por-cobrar.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmComponent } from './confirm/confirm.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { TotalComponent } from './components/total/total.component';


registerLocaleData(localeEc, 'es-US');

@NgModule({
  declarations: [
    AppComponent,
    NuevoChequeComponent,
    ListaHoyComponent,
    HistorialComponent,
    PorCobrarComponent,
    HomeComponent,
    ConfirmComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatAutocompleteModule
  ],
  entryComponents:[ConfirmComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-US' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
