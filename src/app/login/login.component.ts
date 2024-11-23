import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.login(this.credentials).subscribe(() => {
      this.router.navigate(['/profile']);
    }, () => {
      alert('Login failed');
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
