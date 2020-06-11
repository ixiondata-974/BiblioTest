import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LivreService} from '../Model/post/livre.service';
import { BrowserModule } from '@angular/platform-browser';
import {DatePipe, Location} from '@angular/common';

@Component({
  selector: 'app-formulaire-rendu',
  templateUrl: './formulaire-rendu.component.html',
  styleUrls: ['./formulaire-rendu.component.css']
})
export class FormulaireRenduComponent implements OnInit {
  @Input() info: any[] = [];
  title: string;
  constructor(private livreService: LivreService,
              private pipeDate: DatePipe) {  }
setList(): void{
  for (const i in this.livreService.listEmprun){
    this.info.push({
      Titre: this.livreService.listEmprun[i].Titre,
      Emprunteur: this.livreService.listEmprun[i].emprunteur,
      Comment: this.livreService.listEmprun[i].Commentaire,
      DateEmprunt: this.pipeDate.transform(this.livreService.listEmprun[i].dateEmprun, 'yyyy-MM-dd')
    });
  }
  console.log(this.info);
}
  ngOnInit(): void {
    this.setList();
  }

  setDispo(ceLivre) {
    let dateRendu = new Date();
    dateRendu.getDate();
    this.livreService.rendreUnLivre(ceLivre, this.pipeDate.transform(dateRendu, 'dd-MM-yyyy'));
    for (const i in this.livreService.afficheLivre()){
      if (this.livreService.afficheLivre()[i].titre === ceLivre){
        this.livreService.afficheLivre()[i].disponibilite = false;
      }
    }
    this.livreService.refresh();
    alert('Livre rendu');
  }
}
