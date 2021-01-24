import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CreditsService } from '../../services/credits.service';

@Component({
  selector: 'app-annuite',
  templateUrl: './annuite.component.html',
  styleUrls: ['./annuite.component.scss']
})
export class AnnuiteComponent implements OnInit {

  capital: Number | undefined;
  taux: Number | undefined;
  duree: Number | undefined;
  annuite: any;
  idClient: string = "";


  constructor(private credits: CreditsService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const user = this.userService.getCurrentUser();
    this.idClient = user.id;
  }

  onCalculAnnuite() {
    if (!this.capital || !this.taux || !this.duree) {
      console.log("Tous les champs sont requis");
      return
    }

    const body = {
      capital: this.capital,
      taux: this.taux,
      duree: this.duree,
    }

    this.credits.calAnnuite(body).subscribe(res => {
      this.annuite = res;
    })

    const credit = {
      capital: this.capital,
      taux: this.taux,
      annuite: this.annuite,
      duree: this.duree,
      date: "today",
      numCre: "1",
      idClient: this.idClient
    }

    this.credits.saveCredit(credit).subscribe(res => {
      console.log('Votre credit a bien été enregistré');
      this.router.navigate(['/annuite']);

    })

  }
}
