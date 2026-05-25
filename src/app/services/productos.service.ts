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
      fechaAlta: new Date('2026-01-15'),
      descuento: 0
    },
    {
      id: 2,
      nombre: 'Auriculares Bluetooth',
      precio: 89.99,
      categoria: 'Accesorios',
      fechaAlta: new Date('2026-02-20'),
      descuento: 20
    },
    {
      id: 3,
      nombre: 'Teclado Mecánico RGB',
      precio: 1444489.99,
      categoria: 'Periféricos',
      fechaAlta: new Date('2026-03-05'),
      descuento: 0
    },
    {
      id: 4,
      nombre: 'Monitor 4K 27"',
      precio: 15444549.59,
      categoria: 'Electrónica',
      fechaAlta: new Date('2026-03-18'),
      descuento: 0
    },
    {
      id: 5,
      nombre: 'Mouse Ergonómico',
      precio: 10059.99,
      categoria: 'Periféricos',
      fechaAlta: new Date('2026-04-01'),
      descuento: 30
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

  getProducto(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }
}
