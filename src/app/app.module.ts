import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LlivreComponent } from './llivre/llivre.component';
import { FormulaireRenduComponent } from './formulaire-rendu/formulaire-rendu.component';
import { FormEmprunComponent } from './llivre/form-emprun/form-emprun.component';
import { InfoPipePipe } from './llivre/info-pipe.pipe';
import {ModalModule} from 'ngx-bootstrap/modal';
import {LivreService} from './Model/post/livre.service';
import {DatePipe} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LlivreComponent,
    FormulaireRenduComponent,
    FormEmprunComponent,
    InfoPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [LivreService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
