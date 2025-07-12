import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Product } from './product-model';
import { urunler } from './products.datasource';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getProducts(): Observable<Product[]> {
    return of(urunler);
  }

  getProductsByBrand(brand: string): Observable<Product[]> {
    const filtered = urunler.filter(
      (product) =>
        product.brand?.trim().toLowerCase() === brand.trim().toLowerCase()
    );
    return of(filtered);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const filtered = urunler.filter(
      (product) =>
        product.category?.trim().toLowerCase() === category.trim().toLowerCase()
    );
    return of(filtered);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(urunler.find((p) => p.id === id));
  }
}
