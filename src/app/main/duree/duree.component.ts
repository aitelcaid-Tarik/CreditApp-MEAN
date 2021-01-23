import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duree',
  templateUrl: './duree.component.html',
  styleUrls: ['./duree.component.scss']
})
export class DureeComponent implements OnInit {

  capital: string = "";
  taux: string = "";
  annuite: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
