import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-licencas-tab-manager',
  standalone: false,
  templateUrl: './licencas-tab-manager.component.html',
  styleUrl: './licencas-tab-manager.component.scss'
})
export class LicencasTabManagerComponent  {

  selectedIndex = 0; // Define a aba inicial

  constructor(private router: Router) {}

  ngOnInit() {
    // Verifica a URL para definir a aba correta ao carregar
    const url = this.router.url;
    if (url.includes('vencidas')) {
      this.selectedIndex = 0;
    } else if (url.includes('vencendo')) {
      this.selectedIndex = 1;
    }
  }

  onTabChange(event: any) {
    if (event.index === 0) {
      this.router.navigate(['licencas/vencidas']);
    } else if (event.index === 1) {
      this.router.navigate(['licencas/vencendo']);
    }
  }
}
