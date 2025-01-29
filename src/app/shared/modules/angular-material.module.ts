import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';

import { provideNgxMask } from 'ngx-mask';

import localePt from '@angular/common/locales/pt'; 
import localePtExtra from '@angular/common/locales/extra/pt'; 

registerLocaleData(localePt, 'pt-BR', localePtExtra);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTableModule,
    MatDividerModule,
    MatPaginatorModule,
    MatInputModule,
  ],
  exports: [
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTableModule,
    MatDividerModule,
    MatPaginatorModule,
    MatInputModule,
  ],
  providers: [
    provideNgxMask(),
    { provide: MatPaginatorIntl, useValue: CustomPaginator() },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ]
})
export class AngularMaterialModule { }

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Itens por página';
  customPaginatorIntl.previousPageLabel = 'Página anterior';
  customPaginatorIntl.nextPageLabel = 'Próxima pagina';
  customPaginatorIntl.firstPageLabel = 'Primeira página';
  customPaginatorIntl.lastPageLabel = 'Última página';
  
  customPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return '0 de ' + length;
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;

    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

    return startIndex + 1 + ' - ' + endIndex + ' de ' + length + ' itens';
  };
  return customPaginatorIntl;
}