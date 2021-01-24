import { Component, OnInit } from '@angular/core';
import { CreditsService } from '../../services/credits.service';
import { UserService } from '../../services/user.service';
import { Credit } from '../../credit';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  credits: Credit[] = [];

  constructor(private creditService: CreditsService, private userService: UserService) { }

  ngOnInit(): void {
    const currentUser = this.userService.getCurrentUser();
    const query = { idClient: currentUser.id };

    this.creditService.getCredits(query).subscribe(res => { this.credits = res.credits });
  }

}
