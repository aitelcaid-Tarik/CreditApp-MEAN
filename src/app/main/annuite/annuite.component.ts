import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CreditsService } from '../../services/credits.service';
import { FlashMessagesService } from 'angular2-flash-messages';

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
  date: string = new Date().toString().substring(0, 24);
  idClient: string = "";
  state: boolean = true;

  constructor(private creditService: CreditsService, private userService: UserService, private router: Router, private flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
    const user = this.userService.getCurrentUser();
    this.idClient = user.id;
  }

  onCalculAnnuite() {
    if (!this.capital || !this.taux || !this.duree) {
      this.flashMessagesService.show('Tous les champs sont requis', { cssClass: 'alert-danger', timeout: 1000 });
      return;
    }

    const body = {
      capital: this.capital,
      taux: this.taux,
      duree: this.duree,
    }

    this.creditService.calAnnuite(body).subscribe(res => {
      this.annuite = res;
    })

    if (this.state == false) {
      setTimeout(() => {
        const credit = {
          capital: this.capital,
          taux: this.taux,
          annuite: this.annuite,
          duree: this.duree,
          date: this.date,
          idClient: this.idClient
        }

        this.creditService.saveCredit(credit).subscribe(res => {
          this.flashMessagesService.show('Votre credit a bien été enregistré', { cssClass: 'alert-success', timeout: 1000 });
          this.router.navigate(['./annuite']);
        })
      }, 1000);
    }
  }
}
