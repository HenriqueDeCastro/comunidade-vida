import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeInitiationComponent } from './components/home-initiation/home-initiation.component';
import { HomeWhoWeAreComponent } from './components/home-who-we-are/home-who-we-are.component';
import { HomeWhereAreWeComponent } from './components/home-where-are-we/home-where-are-we.component';

@Component({
  selector: 'comunidade-vida-home',
  standalone: true,
  imports: [CommonModule, HomeInitiationComponent, HomeWhoWeAreComponent, HomeWhereAreWeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
