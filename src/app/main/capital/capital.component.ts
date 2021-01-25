import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CreditsService } from '../../services/credits.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss']
})
export class CapitalComponent implements OnInit {

  annuite: Number | undefined;
  taux: Number | undefined;
  duree: Number | undefined;
  capital: any;
  date: string = new Date().toString().substring(0, 24);
  idClient: string = "";
  state: boolean = true;

  constructor(private creditService: CreditsService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const user = this.userService.getCurrentUser();
    this.idClient = user.id;
  }

  onCalculCapital() {
    if (!this.annuite || !this.taux || !this.duree) {
      console.log("Tous les champs sont requis");
      return
    }

    const body = {
      annuite: this.annuite,
      taux: this.taux,
      duree: this.duree,
    }

    this.creditService.calCapital(body).subscribe(res => {
      this.capital = res;
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
          console.log('Votre credit a bien été enregistré');
          this.router.navigate(['/capital']);
        })
      }, 1000);
    }
  }

}
