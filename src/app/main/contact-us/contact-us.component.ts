import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/mail.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  email: string = "aitelcaid.tarik@um5r.ac.ma";
  objet: string = "";
  message: string = "";

  constructor(private mailService: MailService, private flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {

  }

  onSendMail() {

    if (!this.email || !this.objet || !this.message) {
      this.flashMessagesService.show('Tous les champs sont requis', { cssClass: 'alert-danger', timeout: 1000 });
      return;
    }

    const body = {
      email: this.email,
      subject: this.objet,
      text: this.message,
    }

    console.log(body);

    this.mailService.sendMail(body).subscribe(res => {
      this.flashMessagesService.show('Email envoyé!!!', { cssClass: 'alert-success', timeout: 1000 });
    });

  }

}
