// auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.default.User | null>;
  getAuthState: any;

  constructor(private afAuth: AngularFireAuth,private router: Router) {
    this.user$ = afAuth.authState;
  }

  login(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
      return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('User registered: ', result.user);
    } catch (error) {
      console.error(error);
    }
  }
  logout() {
    // Clear user token and other info
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
  isAuthenticated(): boolean {
    // Here you should implement your authentication logic
    // For example, you can check if there's a token in the local storage
    // return !!localStorage.getItem('token');
    return false; // For now, we'll just return false
  }
}
  

