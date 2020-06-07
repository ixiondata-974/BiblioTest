import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LlivreComponent} from './llivre/llivre.component';
import {FormulaireRenduComponent} from './formulaire-rendu/formulaire-rendu.component';

const routes: Routes = [
  {path: 'llivre' , component: LlivreComponent},
  {path: 'formulaireRendu' , component: FormulaireRenduComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [LlivreComponent, FormulaireRenduComponent];
