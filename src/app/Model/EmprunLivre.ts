export class EmprunLivre {
  private _Titre: string;
  private _emprunteur: string;
  private _dateEmprun: Date;
  private _ISBN: number;
  private _Commentaire: any;

  constructor(Titre: string, emprunteur: string, date: Date, ISBN: number, ...Commentaire: any) {
    this._Titre = Titre;
    this._emprunteur = emprunteur;
    this._dateEmprun = date;
    this._ISBN = ISBN;
    this._Commentaire = Commentaire;
  }


  get Titre(): string {
    return this._Titre;
  }

  get emprunteur(): string {
    return this._emprunteur;
  }

  get dateEmprun(): Date {
    return this._dateEmprun;
  }

  get ISBN(): number {
    return this._ISBN;
  }

  get Commentaire(): any {
    return this._Commentaire;
  }
}
