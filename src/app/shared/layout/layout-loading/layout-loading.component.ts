import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-layout-loading',
  standalone: false,

  templateUrl: './layout-loading.component.html',
  styleUrl: './layout-loading.component.scss'
})
export class LayoutLoadingComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  
  constructor(private loadingService: LoadingService) { }
  
  ngOnInit(): void {
    this.isLoading$ = this.loadingService.isLoading$;
  }
}
