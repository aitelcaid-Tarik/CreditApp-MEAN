import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: string = "";
  email: string = "";
  password: string = "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  onRegister() {

    if (!this.name || !this.email || !this.password) {
      console.log("Tous les champs sont requis");
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
        console.log("Votre compte a été créé");
        return this.router.navigate(['../../main/home']);
      }
    );

    return;
  }

}
