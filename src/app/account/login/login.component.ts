import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private router: Router, private userService: UserService, private flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (!this.email || !this.password) {
      this.flashMessagesService.show('Tous les champs sont requis', { cssClass: 'alert-danger', timeout: 1000 });
      return false;
    }

    const user = {
      email: this.email,
      password: this.password

    }

    this.userService.autho(user).subscribe(res => {
      if (!res.success) {
        this.flashMessagesService.show(res.message, { cssClass: 'alert-success', timeout: 1000 });
        return false;
      }

      this.userService.saveUseData(res.token, res.user);
      this.flashMessagesService.show('Vous êtes connecté', { cssClass: 'alert-success', timeout: 1000 });
      this.router.navigate(['/home']);

      return;
    });

    return;
  }

}
