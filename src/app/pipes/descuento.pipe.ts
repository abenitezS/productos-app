import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe personalizado que aplica un descuento porcentual a un precio.
 * Uso en template: {{ producto.precio | descuento: 20 }}
 * Devuelve el precio final como número con 2 decimales.
 */
@Pipe({
  name: 'descuento',
  standalone: true
})
export class DescuentoPipe implements PipeTransform {

  transform(precio: number, porcentaje: number = 0): number {
    if (porcentaje < 0 || porcentaje > 100) {
      return precio;
    }
    const descuento = precio * (porcentaje / 100);
    return parseFloat((precio - descuento).toFixed(2));
  }
}
