import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  @Output() onLogoutEvent = new EventEmitter();

  constructor(private router: Router) {}

  onLogout() {
    this.onLogoutEvent.emit();
    this.router.navigate(['auth']);
  }
}
