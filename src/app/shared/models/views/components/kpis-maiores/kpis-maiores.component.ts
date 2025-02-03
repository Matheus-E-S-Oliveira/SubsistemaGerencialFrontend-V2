import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kpis-maiores',
  standalone: false,
  
  templateUrl: './kpis-maiores.component.html',
  styleUrl: './kpis-maiores.component.scss'
})
export class KpisMaioresComponent {
@Input() title!: string;
@Input() number!: number;
@Input() cor!: string;
}
