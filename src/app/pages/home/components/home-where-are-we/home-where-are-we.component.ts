import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsEnum } from '../../../../shared/models';

@Component({
  selector: 'comunidade-vida-home-where-are-we',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-where-are-we.component.html',
  styleUrl: './home-where-are-we.component.scss'
})
export class HomeWhereAreWeComponent {
  sectionsEnum: typeof SectionsEnum;

  constructor() {
    this.sectionsEnum = SectionsEnum;
  }
}
