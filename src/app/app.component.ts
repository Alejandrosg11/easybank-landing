import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from './header/header.component';
import { BulletComponent } from './bullet/bullet.component';
import { FooterComponent } from './footer/footer.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, BulletComponent, FooterComponent, MobileMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'easybank-landing';
  open: boolean = false;

  showMenu(event: any) {
    this.open = event;
    console.log(event);
  }
}
