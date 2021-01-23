import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-annuite',
  templateUrl: './annuite.component.html',
  styleUrls: ['./annuite.component.scss']
})
export class AnnuiteComponent implements OnInit {

  capital: string = "";
  taux: string = "";
  duree: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
