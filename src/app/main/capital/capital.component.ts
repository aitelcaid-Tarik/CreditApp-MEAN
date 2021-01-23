import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss']
})
export class CapitalComponent implements OnInit {

  annuite: string = "";
  taux: string = "";
  duree: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
