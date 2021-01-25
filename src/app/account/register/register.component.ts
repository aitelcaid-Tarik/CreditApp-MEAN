import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: string = "";
  email: string = "";
  password: string = "";

  constructor(private userService: UserService, private router: Router, private flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {

  }

  onRegister() {

    if (!this.name || !this.email || !this.password) {
      this.flashMessagesService.show('Tous les champs sont requis', { cssClass: 'alert-danger', timeout: 1000 });
      return false;
    }

    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    }

    this.userService.createAccount(user).subscribe(
      res => {
        if (!res.success) {
          console.log(res.message);
          return;
        }
        this.flashMessagesService.show('Votre compte a été créé', { cssClass: 'alert-success', timeout: 1000 });
        return this.router.navigate(['../login']);
      }
    );

    return;
  }

}
