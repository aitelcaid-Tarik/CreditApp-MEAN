import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (!this.email || !this.password) {
      console.log("All fields are required");
      return false;
    }

    const user = {
      email: this.email,
      password: this.password

    }

    this.userService.autho(user).subscribe(res => { 
      if (!res.success){
        console.log(res.message);
        return false;
      }

      this.userService.saveUseData(res.token,res.user);
      this.router.navigate(['/home']);

      return;
    });
    
    return;
  }

}
