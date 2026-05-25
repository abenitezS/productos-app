export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descuento: number;
  categoria: string;
  fechaAlta: Date;
  imagen?: string;
}
