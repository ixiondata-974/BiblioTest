import { Injectable } from '@angular/core';

import {Observable, Subject} from 'rxjs';
import {EmprunLivre} from '../EmprunLivre';
import {HistoriqueEmprun} from '../HistoriqueEmprun';
import {DatePipe, Location} from '@angular/common';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private location: Location,
              private router: Router,
              private pipeDate: DatePipe) {
    console.log('nouveaux service créer');
  }

  // tslint:disable-next-line:variable-name
  private _Base: any = [
  {titre: 'Candide, ou l\'optimisme', auteur: 'Voltaire', ISBN: 9780274298952, categorie: 'Contes et Nouvelles', disponibilite: false},
  {titre: '12 leçons pour apprendre à dessiner le corps humain', auteur: 'Barrington Barber', ISBN: 9782501117364, categorie: 'Cours et Tutoriels ', disponibilite: false},
  // tslint:disable-next-line:max-line-length
  {titre: 'Astérix le gaulois', auteur: 'René Goscinny, Albert Uderzo', ISBN: 9782012101333, categorie: 'Bandes Dessinées', disponibilite: false},
  // tslint:disable-next-line:max-line-length
  {titre: 'Astérix - La serpe d\'Or', auteur: 'René Goscinny, Albert Uderzo', ISBN: 9782012101340, categorie: 'Bandes Dessinées', disponibilite: false},
  // tslint:disable-next-line:max-line-length
  {titre: 'Les Contes de Beedle le Barde', auteur: 'J. K. Rowling', ISBN: 9782075130448, categorie: 'Contes et Nouvelles', disponibilite: false},
    // tslint:disable-next-line:max-line-length
     {titre: 'Larousse des plantes médicinales', auteur: 'Andrew Chevallier', ISBN: 9782035930743, categorie: 'Dictionnaires et Glossaires ', disponibilite: false},
    // tslint:disable-next-line:max-line-length
    {titre: 'En avant toutes', auteur: 'Sheryl Sandberg', ISBN: 9782709643931, categorie: 'Documents et Essais ', disponibilite: false},
    // tslint:disable-next-line:max-line-length
    {titre: 'Droit de l\'immobilier 2020', auteur: 'Muriel Mestre Mahler, Emmanuel Béal dit Rainaldy, Nadège Licoine Hucliez', ISBN: 9782100807017, categorie: 'Droit', disponibilite: false},
    // tslint:disable-next-line:max-line-length
    {titre: 'Les grandes questions d\'économie et finance internationales : Décoder l\'actualité', auteur: 'Mathilde Lemoine, Philippe Madiès, Thierry Madiès, Lionel Fontagné', ISBN: 9782807301566, categorie: 'Economie et Finance', disponibilite: false},
    // tslint:disable-next-line:max-line-length
    {titre: 'Le guide illustré de l\'écologie', auteur: 'Bernard Fischesser, Marie-france Dupuis-tate ', ISBN: 9782603025277, categorie: 'Environnement et Ecologie', disponibilite: false},
    // tslint:disable-next-line:max-line-length
    {titre: 'Manuel de l\'autodidacte en informatique', auteur: 'Lucas Sztandarowski', ISBN: 9780244878016, categorie: 'Informatique ', disponibilite: false},
    // tslint:disable-next-line:max-line-length
    {titre: 'Lettres & mémoires ', auteur: 'Maria Callas', ISBN: 9782226437143, categorie: 'Lettres et Memoires ', disponibilite: false},
    // tslint:disable-next-line:max-line-length
    {titre: 'Petit Grimoire Légendes de Brocéliande', auteur: 'Xavier Hussön', ISBN: 9782370510280, categorie: 'Livres Divers ', disponibilite: false},
    // tslint:disable-next-line:max-line-length
    {titre: 'La Médecine pour les Nuls', auteur: 'Patrick GEPNER ', ISBN: 9782754018760, categorie: 'Medecine et Sante ', disponibilite: false},
    // tslint:disable-next-line:max-line-length
    {titre: 'Les cent plus beaux poèmes de la langue française', auteur: 'Jean Orizet', ISBN: 9782253153030, categorie: 'Poesie ', disponibilite: false},
    // tslint:disable-next-line:max-line-length
    {titre: 'Petit traité d\'histoire des religions', auteur: 'Frédéric LENOIR', ISBN: 9782259207324, categorie: 'Religion et Croyances ', disponibilite: false},
    // tslint:disable-next-line:max-line-length
    {titre: 'Pour l\'amour d\'une Sasunnach', auteur: 'Aurélie Depraz', ISBN: 9782956469407, categorie: 'Romans ', disponibilite: false},
    // tslint:disable-next-line:max-line-length
    {titre: 'Aide-mémoire Electrotechnique - 2e éd.', auteur: 'Pierre Mayé', ISBN: 9782100716852, categorie: 'Sciences et Techniques ', disponibilite: false},
    // tslint:disable-next-line:max-line-length
    {titre: 'Charlie et la chocolaterie pièce de théâtre', auteur: 'Roald Dahl ', ISBN: 9782070640638, categorie: 'Théatre', disponibilite: false},
    // tslint:disable-next-line:max-line-length
    {titre: '100 nouveaux lieux à couper le souffle', auteur: 'Brice Gruet ', ISBN: 9782035956972, categorie: 'Tourisme et Voyages ', disponibilite: false}
];

  listEmprun: Array<EmprunLivre> = new Array();
  Historique: Array<HistoriqueEmprun> = new Array();

  private listners = new Subject<any>();

  rendreUnLivre(ceLivre, dateRendu): void{
    for (let i = 0; i < this.listEmprun.length; i++){
      if (this.listEmprun[i].Titre === ceLivre){
        this.Historique.push(
          new HistoriqueEmprun(this.listEmprun[i].Titre,
            this.listEmprun[i].emprunteur,
            this.listEmprun[i].ISBN,
            this.listEmprun[i].dateEmprun,
            dateRendu,
            this.listEmprun[i].Commentaire)
        );
        this.listEmprun.splice(i, 1);
      }
    }
    console.log(this.listEmprun);
  }

  listen(): Observable<any>{
    return this.listners.asObservable();
  }
  filter(filterBy: string){
    this.listners.next(filterBy);
  }

  afficheLivre() {
    return this._Base;
  }

  refresh(): void{
    this.router.navigateByUrl('/formEmprun', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.location.path()]);
    });
  }
}
