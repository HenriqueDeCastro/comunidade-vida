import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSectionInitiationComponent } from './components/home-section-initiation/home-section-initiation.component';
import { HomeSectionWhoWeAreComponent } from './components/home-section-who-we-are/home-section-who-we-are.component';

@Component({
  selector: 'comunidade-vida-home',
  standalone: true,
  imports: [CommonModule, HomeSectionInitiationComponent, HomeSectionWhoWeAreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
