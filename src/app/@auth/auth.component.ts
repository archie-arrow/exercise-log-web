import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface slideInterface {
  img: string;
  text: string;
  name: string;
  job: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AuthComponent {
  index = 0;
  slider: slideInterface[] = [
    {
      img: 'slider-item-1.jpg',
      text: '“We often overestimate how often we do things, but tracking eliminates this weakness. When we track we just have the facts, not our subjective reflections.”',
      name: 'Betsy Ramser Jaime',
      job: 'Freelance Editor',
    },
    {
      img: 'slider-item-2.jpg',
      text: '“If we could give every individual the right amount of nourishment and exercise, not too little and not too much, we would have found the safest way to health.”',
      name: 'Hippocrates',
      job: 'Greek physician',
    },
    {
      img: 'slider-item-3.jpg',
      text: `“If you want to find the real competition, just look in the mirror. After awhile you'll see your rivals scrambling for second place.”`,
      name: 'Criss Jam',
      job: 'Musical artist',
    },
  ];
  currentSlide: slideInterface = this.slider[this.index];

  constructor() {}

  prev(): void {
    if (this.index === 0) {
      this.index = this.slider.length - 1;
    } else this.index--;
    this.useSliderChanged();
  }

  next(): void {
    if (this.index + 1 === this.slider.length) {
      this.index = 0;
    } else this.index++;
    this.useSliderChanged();
  }

  useSliderChanged(): void {
    this.currentSlide = this.slider[this.index];
    // @ts-ignore
    document.getElementById(
      'image',
    ).style.backgroundImage = `url("../../assets/images/slider/${this.currentSlide.img}")`;
  }
}
