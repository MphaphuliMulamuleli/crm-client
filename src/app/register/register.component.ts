import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { firstName: '', lastName: '', email: '', password: '' };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.register(this.user).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
