import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showNavbar = true;

  constructor(private backEndService: BackEndService, private router: Router, private location: Location, private authService: AuthService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !['/register', '/login'].includes(this.location.path());
      }
    });
  }

  ngOnInit(): void {
  }

  onSave() {
    this.backEndService.saveData();
  }
  
  onFetch() {
    this.backEndService.fetchData();
  }
  onLogout() {
    // Perform logout operation here...
  
    // Redirect to login page
    this.router.navigate(['/login']);
  
    // Manipulate browser history
    history.pushState(null, '', location.href);
    window.onpopstate = function () {
        history.go(1);
    };
  }
}