import { Component, OnInit } from '@angular/core';
import { ReceitaService } from './shared/services/receita.service';
import { LicencaService } from './shared/services/licenca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'SubsistemaGerencialFrontend';
constructor(private receitaService: ReceitaService, private licencaService: LicencaService){}

  ngOnInit(): void {
    this.receitaService.loadLicencaData();
    this.licencaService.loadLicencaData(); 
  }


}
