export class HistoriqueEmprun {
  private TitreOuvrage: string;
  private Emprunteur: string;
  private ISBN: number;
  private dateDebut: Date;
  private dateFin: Date;
  private libelleEmprun: string;

  constructor(TitreOuvrage: string, Emprunteur: string, ISBN: number, dateDebut: Date, dateFin: Date, libelleEmprun: string) {
    this.TitreOuvrage = TitreOuvrage;
    this.Emprunteur = Emprunteur;
    this.ISBN = ISBN;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.libelleEmprun = libelleEmprun;
  }
}
