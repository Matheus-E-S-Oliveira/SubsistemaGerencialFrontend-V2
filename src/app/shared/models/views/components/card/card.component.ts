import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() tooltipText: string = 'teste';
  @Input() titulo!: string;
  @Input() number!: number | null | string;
  @Input() customClass: string = 'card-content';
}
