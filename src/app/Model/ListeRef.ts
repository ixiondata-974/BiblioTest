import {ListLivre} from './ListLivre';

export class ListeRef {
  // tslint:disable-next-line:variable-name
  private _unLivre: Array<ListLivre> = new Array();
  // tslint:disable-next-line:variable-name
  private _Base: any = [
    {titre: 'Candide, ou l\'optimisme', auteur: 'Voltaire', ISBN: 9780274298952, categorie: 'Contes et Nouvelles', disponibilite: true},
    {titre: '12 leçons pour apprendre à dessiner le corps humain', auteur: 'Barrington Barber', ISBN: 9782501117364, categorie: 'Cours et Tutoriels ', disponibilite: true},
    // tslint:disable-next-line:max-line-length
    {titre: 'Astérix le gaulois', auteur: 'René Goscinny, Albert Uderzo', ISBN: 9782012101333, categorie: 'Bandes Dessinées', disponibilite: false},
    // tslint:disable-next-line:max-line-length
    {titre: 'Astérix - La serpe d\'Or', auteur: 'René Goscinny, Albert Uderzo', ISBN: 9782012101340, categorie: 'Bandes Dessinées', disponibilite: true},
    // tslint:disable-next-line:max-line-length
    {titre: 'Les Contes de Beedle le Barde', auteur: 'J. K. Rowling', ISBN: 9782075130448, categorie: 'Contes et Nouvelles', disponibilite: false}
  ];
  private i: number;

  get unLivre(): Array<ListLivre> {
    for (this.i = 0; this.i < Object.keys(this._Base).length; this.i++){
      this._unLivre.push(new ListLivre(
        this._Base[this.i].titre,
        this._Base[this.i].auteur,
        this._Base[this.i].ISBN,
        this._Base[this.i].categorie,
        this._Base[this.i].disponibilite,
        ));
    }
    return this._unLivre;
  }

  get Base(): any {
    return this._Base;
  }
}
