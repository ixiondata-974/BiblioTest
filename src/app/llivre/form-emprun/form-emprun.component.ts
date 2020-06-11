import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LivreService} from '../../Model/post/livre.service';
import {DatePipe} from '@angular/common';
import {NgForm} from '@angular/forms';
import {EmprunLivre} from '../../Model/EmprunLivre';

@Component({
  selector: 'app-form-emprun',
  templateUrl: './form-emprun.component.html',
  styleUrls: ['./form-emprun.component.css']
})
export class FormEmprunComponent implements OnInit {
  @Input() detailEmprunt;
  @Output() refresh = new EventEmitter();
  Disable = false;
  constructor(private livreService: LivreService,
              private pipeDate: DatePipe) { }
  disponibilite(): string {
    if (this.detailEmprunt.disponible === true){
      this.Disable = true;
      return 'Déjà emprunté';
    }else {
      return '';
    }
  }
  ngOnInit(): void {
  }
setDispo(): void{
  for (const i in this.livreService.afficheLivre()){
    if (this.livreService.afficheLivre()[i].titre === this.detailEmprunt.title){
      this.livreService.afficheLivre()[i].disponibilite = true;
    }
  }
}
  onSubmit(f: NgForm) {
    console.log(f.value.nom);

    const dateEmprunt = new Date();
    dateEmprunt.getDate();
    const NmPrenom: string = f.value.nom + ' ' + f.value.prenom;

    this.livreService.listEmprun.push(
      new EmprunLivre(this.detailEmprunt.title, NmPrenom.toString(), dateEmprunt, this.detailEmprunt.ISBN, f.value.comm)
    );
    this.setDispo();
    this.refresh.emit();
    alert(NmPrenom + ' a emprunté le livre : ' + this.detailEmprunt.title + ' \n ' +
      'le ' + this.pipeDate.transform(dateEmprunt, 'dd-MM-yyyy'));
  }
}
