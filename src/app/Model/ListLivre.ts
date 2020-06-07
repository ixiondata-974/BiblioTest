import {NullTemplateVisitor} from '@angular/compiler';

export class ListLivre {
  // tslint:disable-next-line:variable-name
  private _Titre: string;
  // tslint:disable-next-line:variable-name
  private _Auteur: string;
  private _ISBN: number;
  // tslint:disable-next-line:variable-name
  private _Genre: string;
  // tslint:disable-next-line:variable-name
  private _Disponible: boolean;

  constructor(Titre: string, Auteur: string, ISBN: number, Genre: string, Disponible: boolean) {
    this._Titre = Titre;
    this._Auteur = Auteur;
    this._ISBN = ISBN;
    this._Genre = Genre;
    this._Disponible = Disponible;
  }

// Getter.............................................................
  get Titre(): string {
    return this._Titre;
  }

  get Auteur(): string {
    return this._Auteur;
  }

  get ISBN(): number {
    return this._ISBN;
  }

  get Genre(): string {
    return this._Genre;
  }

  get Disponible(): boolean {
    return this._Disponible;
  }

// Setter............................................................................
}
