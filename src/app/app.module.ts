import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LlivreComponent } from './llivre/llivre.component';
import { FormulaireRenduComponent } from './formulaire-rendu/formulaire-rendu.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormEmprunComponent } from './llivre/form-emprun/form-emprun.component';
import { InfoPipePipe } from './llivre/info-pipe.pipe';
import {ModalModule} from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    LlivreComponent,
    FormulaireRenduComponent,
    FormEmprunComponent,
    InfoPipePipe
  ],
  entryComponents: [FormEmprunComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
