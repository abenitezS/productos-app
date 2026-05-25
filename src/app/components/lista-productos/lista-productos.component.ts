import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';
import { DescuentoPipe } from '../../pipes/descuento.pipe';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPipe, DatePipe, DescuentoPipe],
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[] = [];


  // Campos del formulario para agregar producto
  nuevoNombre: string = '';
  nuevoPrecio: number | null = null;
  nuevaCategoria: string = '';
 nuevoDescuento: number  = 0;


  mostrarFormulario: boolean = false;
  mensajeExito: string = '';

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productos = this.productosService.getProductos();
  }

  agregarProducto(): void {
    if (!this.nuevoNombre.trim() || !this.nuevoPrecio || !this.nuevaCategoria.trim()) {
      return;
    }

    this.productosService.addProducto({
      nombre: this.nuevoNombre.trim(),
      precio: this.nuevoPrecio,
      descuento: this.nuevoDescuento || 0,
      categoria: this.nuevaCategoria.trim(),
      fechaAlta: new Date()
    });

    this.productos = this.productosService.getProductos();

    // Limpiar formulario
    this.nuevoNombre = '';
    this.nuevoPrecio = null;
    this.nuevaCategoria = '';
    this.mostrarFormulario = false;

    this.mensajeExito = '¡Producto agregado correctamente!';
    setTimeout(() => this.mensajeExito = '', 3000);
  }

  eliminarProducto(id: number): void {
    this.productosService.deleteProducto(id);
    this.productos = this.productosService.getProductos();
  }

  toggleFormulario(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

limitarDescuento(valor: number): number {

    // Limitar a 3 dígitos
  if (valor.toString().length > 3) {
   return 0;
    
  }

  if (valor > 100) {
    return 100;
  }

  if (valor < 0) {
    return 0;
  }

  return valor;

}

}