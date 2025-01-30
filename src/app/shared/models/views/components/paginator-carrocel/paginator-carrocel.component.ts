import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-paginator-carrocel',
  standalone: false,

  templateUrl: './paginator-carrocel.component.html',
  styleUrl: './paginator-carrocel.component.scss'
})
export class PaginatorCarrocelComponent {
  @Input() title: string = '';
  @Input() item!: number;
  @Input() carouselItems!: HTMLDivElement;
  
  currentIndex: number = 0;
  moveCarousel(direction: number) {
    const wrapper = this.carouselItems as HTMLElement;
    const itemWidth = wrapper.offsetWidth;
    const totalItems = wrapper.childElementCount;

    this.currentIndex += direction;

    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    } else if (this.currentIndex >= totalItems) {
      this.currentIndex = totalItems - 1;
    }

    wrapper.style.transform = `translateX(-${itemWidth * this.currentIndex}px)`;
  }
}
