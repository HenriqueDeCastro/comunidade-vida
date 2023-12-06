import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';
import { ICarouselSlide } from '../../../../shared/models';

@Component({
  selector: 'comunidade-vida-home-section-who-we-are',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './home-section-who-we-are.component.html',
  styleUrl: './home-section-who-we-are.component.scss'
})
export class HomeSectionWhoWeAreComponent {
  slides: ICarouselSlide[];

  constructor() {
    this.slides = [
      { src: 'https://scontent-gru1-2.cdninstagram.com/v/t39.30808-6/405322810_18282049330155704_8457201177356684093_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=108&_nc_ohc=_BzNKjWvZ_kAX_VW9Nf&edm=AGenrX8AAAAA&ccb=7-5&oh=00_AfCE25Ajkj2jhtOwgGWOfuy1IJTGlb6L1CrVfDBOl6u9gQ&oe=6574CD96&_nc_sid=ed990e'},
      { src: 'https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/275433022_2492136397585890_6573423249346857810_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGQIqw5epywMbvrwLSo6a_kOmW_wZFlP8k6Zb_BkWU_yexVlTSfXty4qqly1m7aulhCcB75okjr7-aMOVSiYQ9u&_nc_ohc=TeuHseEzW9kAX-6FL4R&_nc_ht=scontent-gru1-2.xx&oh=00_AfC-LHDNGRwHwNEmONoRb_q3a7XfeaMlX6K9O-UfW2nvqw&oe=6575DAD3'},
      { src: 'https://scontent-gru1-2.cdninstagram.com/v/t39.30808-6/375979946_18271944733155704_7598630772814649842_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=108&_nc_ohc=gzBHi_YOZxAAX9GYYJl&edm=AGenrX8AAAAA&ccb=7-5&oh=00_AfBhn-13-hi61JbAtK33KyuYMq3aQI_T9uoharm8Mc593Q&oe=6574A3FC&_nc_sid=ed990e' },
      { src: 'https://scontent-gru1-2.cdninstagram.com/v/t39.30808-6/405255027_18282047602155704_1486750868772084226_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=108&_nc_ohc=j60rvvSSIg0AX86phBX&edm=AGenrX8AAAAA&ccb=7-5&oh=00_AfALHxiE964yvkEMtYkcwjp9QURqfW4qVHFmcGM3aYToXw&oe=657547D8&_nc_sid=ed990e' }
    ]
  }
}
