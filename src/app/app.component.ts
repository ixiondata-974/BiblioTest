import {Component, OnInit} from '@angular/core';
import {LivreService} from './Model/post/livre.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LivreService]
})
export class AppComponent implements OnInit{

  // tslint:disable-next-line:indent variable-name
	constructor(){	}

  ngOnInit(): void {
  }

}
