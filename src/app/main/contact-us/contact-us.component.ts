import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  email: string = "aitelcaid.tarik@gmail.com";
  objet: string = "";
  message: string = "";

  constructor(private mailService: MailService) { }

  ngOnInit(): void {

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
