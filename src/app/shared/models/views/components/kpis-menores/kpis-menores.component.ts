import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kpis-menores',
  standalone: false,
  
  templateUrl: './kpis-menores.component.html',
  styleUrl: './kpis-menores.component.scss'
})
export class KpisMenoresComponent {
@Input() title!: string
@Input() number!: number
}
