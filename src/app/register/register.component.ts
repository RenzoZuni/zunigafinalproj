import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerEmail: string | undefined;
  registerPassword: string | undefined;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getAuthState().subscribe((user: any) => {
      if (user) {
        this.router.navigate(['/add-account']);
      }
    });
  }

  register() {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (this.registerEmail && this.registerPassword && this.registerPassword.length >= 8) {
      this.authService.register(this.registerEmail, this.registerPassword)
        .then((result: any) => {
          console.log('User registered');
          console.log(result); // This will log the result of the registration
          window.alert('Registered successfully'); // This will display the alert
          this.registerEmail = '';
          this.registerPassword = '';
          this.router.navigate(['/login']); // navigate to add account page
        }).catch((error: any) => {
          console.error(error);
        });
      } else {
        console.error('Password must be at least 8 characters long');
        window.alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
      }
    }
}