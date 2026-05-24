import { Component } from '@angular/core';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaProductosComponent],
  template: `<app-lista-productos></app-lista-productos>`,
  styles: [`
    :host { display: block; min-height: 100vh; background: #f1f5f9; }
  `]
})
export class AppComponent {}
