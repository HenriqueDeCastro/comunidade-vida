import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { transition, trigger, useAnimation } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { ICarouselSlide, scaleIn, scaleOut } from '../../models';

@Component({
  selector: 'comunidade-vida-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  animations: [
    trigger("scaleAnimation", [
      /* scale */
      transition("void => *", [useAnimation(scaleIn, {params: { time: '500ms' }} )]),
      transition("* => void", [useAnimation(scaleOut, {params: { time: '500ms' }})]),
    ])
  ]
})
export class CarouselComponent implements OnChanges {
  @Input() slides!: ICarouselSlide[];
  currentSlide: number;

  constructor() {
    this.currentSlide = 0;
  }

  ngOnChanges(): void {
    this.preloadImages();
  }

  preloadImages(): void {
    this.slides.forEach((slide: ICarouselSlide) => new Image().src = slide.src)
  }

  previousSlide(): void {
    this.currentSlide--;
    this.currentSlide = (this.currentSlide < 0) ? this.slides.length - 1 : this.currentSlide;
  }

  nextSlide(): void {
    this.currentSlide++;
    this.currentSlide = (this.currentSlide === this.slides.length) ? 0 : this.currentSlide;
  }
}
