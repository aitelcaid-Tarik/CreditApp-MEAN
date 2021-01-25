import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  email: string = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const user = this.userService.getCurrentUser();
    this.email = user.email;
  }

}
