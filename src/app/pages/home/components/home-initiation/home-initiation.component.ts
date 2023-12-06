import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from '../../../../shared/models';

@Component({
  selector: 'comunidade-vida-home-initiation',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './home-initiation.component.html',
  styleUrl: './home-initiation.component.scss',
  animations: [
    trigger("carouselAnimation", [
      /* scale */
      transition("void => *", [useAnimation(fadeIn, {params: { time: '500ms' }} )]),
      transition("* => void", [useAnimation(fadeOut, {params: { time: '500ms' }})]),
    ])
  ]
})
export class HomeInitiationComponent {

}
