import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  nomClient: string = "";
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const user = this.userService.getCurrentUser();
    this.nomClient = user.name;
   }

}
