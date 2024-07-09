import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    this.loginService.authenticate(this.email, this.password).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Invalid email or password';
      }
    });
  }
}
