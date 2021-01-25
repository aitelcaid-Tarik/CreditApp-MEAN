import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  email: string = "";
  objet: string = "";
  message: string = "";

  constructor(private userService: UserService, private mailService: MailService) { }

  ngOnInit(): void {
    const user = this.userService.getCurrentUser();
    this.email = user.email;
  }

  onSendMail() {

    if (!this.email || !this.objet || !this.message) {
      console.log("Tous les champs sont requis");
      return;
    }

    const body = {
      email: this.email,
      subject: this.objet,
      text: this.message,
    }

    console.log(body);

    this.mailService.sendMail(body).subscribe(res => {
      console.log("Email envoyé!!!");
    });

  }

}
