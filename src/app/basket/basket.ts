import { Component, Input } from '@angular/core';
import { BasketItem, BasketService } from '../basket-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-basket',
  imports: [CommonModule, RouterLink],
  templateUrl: './basket.html',
  styleUrl: './basket.css',
})
export class Basket {
  constructor(private basketService: BasketService) {}

  basketList: BasketItem[] = [];
  productCount: number = 0;
  totalPrice: number = 0;
  totalCount: number = 0;

  ngOnInit() {
    this.basketService.getBasket().subscribe((basket) => {
      this.basketList = basket;
    });
    this.assignSummary();
  }

  increaseCount(item: BasketItem) {
    // if (itemCount) if (itemCount < 20) itemCount++;
    if (item && item.count) {
      if (item.count < 20) {
        item.count++;
        this.basketService.updateProductCount(item, item.count);
        this.assignSummary();
      }
    }
  }

  decreaseCount(item: BasketItem) {
    if (item && item.count) {
      if (item.count > 1) {
        item.count--;
        this.basketService.updateProductCount(item, item.count);
        this.assignSummary();
      }
    }
  }

  assignSummary() {
    this.basketService
      .getTotalPrice()
      .subscribe((result) => (this.totalPrice = result));
    this.basketService
      .getTotalProducts()
      .subscribe((result) => (this.totalCount = result));
  }

  deleteFromBasket(item: BasketItem) {
    this.basketService.deleteProduct(item);
    this.assignSummary();
  }
}
