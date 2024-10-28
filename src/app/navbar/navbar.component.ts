import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() isOpen = new EventEmitter<boolean>();
  open = false;

  openMenu(open: any) {
    this.open = !open
    this.isOpen.emit(!open);
  }
}
