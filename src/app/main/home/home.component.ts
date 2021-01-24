import { Component, OnInit } from '@angular/core';
import { CreditsService } from '../../services/credits.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  acredits = [];

  constructor(private creditService: CreditsService, private userService: UserService) { }

  ngOnInit(): void {
    const currentUser = this.userService.getCurrentUser();
    const query = { idClient: currentUser.id };

    this.creditService.getCredits(query).subscribe(res => {

      this.acredits = res.credits;

    });
  }

}
