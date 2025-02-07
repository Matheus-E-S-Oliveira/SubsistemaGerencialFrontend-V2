import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpis-maiores',
  standalone: false,
  
  templateUrl: './kpis-maiores.component.html',
  styleUrl: './kpis-maiores.component.scss'
})
export class KpisMaioresComponent implements OnInit {
  @Input() titulo!: string;
  @Input() number!: number | null;
  @Input() cor!: string;
  @Input() tooltipText: string = 'teste';
  
  ngOnInit(): void {
  }
}
