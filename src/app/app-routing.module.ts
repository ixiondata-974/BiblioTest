import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LlivreComponent} from './llivre/llivre.component';
import {FormulaireRenduComponent} from './formulaire-rendu/formulaire-rendu.component';
import {FormEmprunComponent} from './llivre/form-emprun/form-emprun.component';

const routes: Routes = [
  {path: '' , redirectTo: 'llivre', pathMatch: 'full'},
  {path: 'llivre' , component: LlivreComponent},
  {path: 'formEmprun' , component: FormEmprunComponent},
  {path: 'formulaireRendu' , component: FormulaireRenduComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
