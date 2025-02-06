import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpis-maiores',
  standalone: false,
  
  templateUrl: './kpis-maiores.component.html',
  styleUrl: './kpis-maiores.component.scss'
})
export class KpisMaioresComponent implements OnInit {
  @Input() title!: string;
  @Input() number!: number | null;
  @Input() cor!: string;
  
  ngOnInit(): void {
  }
}
