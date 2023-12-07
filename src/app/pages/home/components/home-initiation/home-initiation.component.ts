import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn, slideUp } from '../../../../shared/models';

@Component({
  selector: 'comunidade-vida-home-initiation',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './home-initiation.component.html',
  styleUrl: './home-initiation.component.scss',
  animations: [
    trigger("fadeInAnimation", [
      transition("void => *", [useAnimation(fadeIn, {params: { time: '800ms' }} )]),
    ]),
    trigger("slideUpAnimation", [
      transition("void => *", [useAnimation(slideUp, {params: { time: '800ms' }} )]),
    ]),
  ]
})
export class HomeInitiationComponent {

}
