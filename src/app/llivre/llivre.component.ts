import {Component, EventEmitter, OnInit, Input, Output, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {LivreService} from '../Model/post/livre.service';

@Component({
  selector: 'app-llivre',
  templateUrl: './llivre.component.html',
  styleUrls: ['./llivre.component.css']
})
export class LlivreComponent implements OnInit {
  @Input() switch;
  constructor(private modalService: BsModalService,
              public livreService: LivreService){
  }
  private modaleRef: BsModalRef;
  sendObject = {};
  info: Array<any> = new Array();
  title: string;
  dispo: string;
  isbn: string;

  ngOnInit(): void {
    for (const i in this.livreService.afficheLivre()){
      this.info.push({
        titre: this.livreService.afficheLivre()[i].titre,
        auteur: this.livreService.afficheLivre()[i].auteur,
        ISBN: this.livreService.afficheLivre()[i].ISBN,
        genre: this.livreService.afficheLivre()[i].categorie,
        disponible: this.livreService.afficheLivre()[i].disponibilite
      });
    }
  }

  openForm(leTemplate: TemplateRef<any>, elem) {
    this.modaleRef = this.modalService.show(leTemplate);
    this.sendObject = {
      title: elem.titre,
      auteur: elem.auteur,
      genre: elem.genre,
      ISBN: elem.ISBN,
      disponible: elem.disponible
    };
  }

  indisponible(disponibilite) {
    if (disponibilite === true){
      return 'grey';
    }else {
      return 'black';
    }
  }

  emit() {
    this.modaleRef.hide();
    this.livreService.refresh();
  }
}
