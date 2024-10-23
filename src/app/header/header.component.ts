import { Component } from '@angular/core';
import { BulletComponent } from "../bullet/bullet.component";
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BulletComponent, ArticlesComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
}
