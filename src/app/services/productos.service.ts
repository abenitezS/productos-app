import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Laptop Pro 15"',
      precio: 1299.99,
      categoria: 'Electrónica',
      fechaAlta: new Date('2024-01-15'),
    },
    {
      id: 2,
      nombre: 'Auriculares Bluetooth',
      precio: 89.99,
      categoria: 'Accesorios',
      fechaAlta: new Date('2024-02-20'),
    },
    {
      id: 3,
      nombre: 'Teclado Mecánico RGB',
      precio: 149.99,
      categoria: 'Periféricos',
      fechaAlta: new Date('2024-03-05'),
    },
    {
      id: 4,
      nombre: 'Monitor 4K 27"',
      precio: 549.99,
      categoria: 'Electrónica',
      fechaAlta: new Date('2024-03-18'),
    },
    {
      id: 5,
      nombre: 'Mouse Ergonómico',
      precio: 59.99,
      categoria: 'Periféricos',
      fechaAlta: new Date('2024-04-01'),
    },
  ];

  private nextId = 6;

  /** Devuelve una copia del array de productos */
  getProductos(): Producto[] {
    return [...this.productos];
  }

  /** Agrega un nuevo producto a la lista */
  addProducto(producto: Omit<Producto, 'id'>): Producto {
    const nuevo: Producto = { id: this.nextId++, ...producto };
    this.productos.push(nuevo);
    return nuevo;
  }

  /** Elimina un producto por su id */
  deleteProducto(id: number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }
}
