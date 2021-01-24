import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CreditsService } from '../../services/credits.service';

@Component({
  selector: 'app-duree',
  templateUrl: './duree.component.html',
  styleUrls: ['./duree.component.scss']
})
export class DureeComponent implements OnInit {

  capital: Number | undefined;
  taux: Number | undefined;
  annuite: Number | undefined;
  duree: any;
  date: string = new Date().toString().substring(0, 24);
  idClient: string = "";

  constructor(private creditService: CreditsService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const user = this.userService.getCurrentUser();
    this.idClient = user.id;
  }

  onCalculDuree() {
    if (!this.capital || !this.taux || !this.annuite) {
      console.log("Tous les champs sont requis");
      return
    }

    const body = {
      capital: this.capital,
      taux: this.taux,
      annuite: this.annuite,
    }

    this.creditService.calDuree(body).subscribe(res => {
      this.duree = res;
    })

    const credit = {
      capital: this.capital,
      taux: this.taux,
      annuite: this.annuite,
      duree: this.duree,
      date: this.date,
      idClient: this.idClient
    }

    this.creditService.saveCredit(credit).subscribe(res => {
      console.log('Votre credit a bien été enregistré');
      this.router.navigate(['/duree']);
    })
  }

}
