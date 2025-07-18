import { Injectable } from '@angular/core';
import { Product } from './product-model';
import { BehaviorSubject, Observable, of } from 'rxjs';

export class BasketItem {
  product?: Product;
  price?: number;
  count?: number;
}

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  // Servis oluşturulduğunda localStorage'dan sepeti yüklemeye çalışır
  private productMessage = new BehaviorSubject<number>(0);
  currentMessage = this.productMessage.asObservable();

  constructor() {
    try {
      const stored = localStorage.getItem('basket');
      if (stored) {
        const parsed = JSON.parse(stored); // JSON formatındaki veri JS objesine dönüştürülür
        if (Array.isArray(parsed)) {
          this.basket = parsed; // Sepet array'i servise yüklenir

          // Sepetin toplam fiyatı hesaplanır
          this.finalPrice = this.basket.reduce(
            (total, item) => total + (item.price ?? 0) * (item.count ?? 1),
            0
          );
          this.getTotalProducts()
        }
      }
    } catch (e) {
      console.error('Error while loading basket: ', e);
    }
  }

  changeMessage(productCount: number) {
    this.productMessage.next(productCount)
  }

  finalPrice: number = 0; // Toplam fiyat
  basket: BasketItem[] = [];

  /*
   Yeni bir ürün sepete eklenir veya mevcutsa sayısı artırılır.
   Sepetin toplam fiyatı güncellenir ve sepet bilgisi localStorage ile kaydedilir.
   */

  filterNumbers(number: number) {
    return Math.round(number * 100) / 100;
  }

  addProduct(product: Product, price: number, count: number): void {
    // Sepette aynı id ve bedene sahip ürün varsa bulur
    const cloneProduct = this.basket.find(
      (item) =>
        item.product?.id === product.id &&
        JSON.stringify(item.product?.size) === JSON.stringify(product.size)
    );

    console.log("Clone: ", cloneProduct?.product)
    console.log("Fetched: ", product)
    if (cloneProduct) {
      console.log("aynı")
      /* Eğer varsa, ürünün miktarını artırır
      (cloneProduct.count ?? 0) + count demek, cloneProduct'de ne kadar varsa üzerine ekle, bişey yoksa 0 al ve count kadar ekle demektir */
      cloneProduct.count = (cloneProduct.count ?? 0) + count;
    } else {
      this.basket.push({ product, price, count });
    }

    this.finalPrice += price * count;
    this.finalPrice = this.filterNumbers(this.finalPrice); // en fazla 2 basamak olacak şekilde
    this.getTotalProducts()
    this.saveBasket();
    /*
    string'e çevirme kısmı 
    NEDEN "toString()" DEĞİL?
    "toString()" yapmak, direkt türü bastıracağından ([object Object]) ve obje olarak geri çevrilemeyeceğinden dolayı stringify kullanıldı.
    */
  }

  getBasket(): Observable<BasketItem[]> {
    return of(this.basket);
  }

  clearBasket(): void {
    this.basket = [];
    this.finalPrice = 0;
    localStorage.removeItem('basket');
  }

  updateProductCount(item: BasketItem, value: number) {
    var product = this.basket.find((basketItem) => basketItem === item);
    if (product) {
      product.count = value;
      this.saveBasket();
    }
  }

  getTotalPrice(): Observable<number> {
    let totalPrice = 0;
    this.basket.forEach((element) => {
      if (element.count && element.price) {
        let elementTotal = element.count * element.price;
        totalPrice += elementTotal;
      }
    });
    console.log('getTotal : ', this.filterNumbers(totalPrice));
    return of(this.filterNumbers(totalPrice));
  }

  getTotalProducts(): Observable<number> {
    let totalProduct = 0;
    this.basket.forEach((element) => {
      if (element.count) {
        let elementTotal = element.count;
        totalProduct += elementTotal;
      }
    });
    console.log('getTotal : ', totalProduct);
    this.changeMessage(totalProduct)
    return of(totalProduct);
  }

  saveBasket() {
    localStorage.setItem('basket', JSON.stringify(this.basket));
  }

  deleteProduct(product: BasketItem) {
    const index = this.basket.findIndex(
      (result) => result.product?.id === product.product?.id
    );
    if (index !== -1) {
      this.basket.splice(index, 1); //index'ten itibaren 1 öğe sil demek o öğeyi sil demektir.
      this.saveBasket();
    }
    this.getTotalProducts();
  }
}
