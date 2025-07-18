import { Component, Input } from '@angular/core';
import { ProductService } from '../product-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../product-model';
import { CommonModule } from '@angular/common';
import { BasketService } from '../basket-service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute, //rotayı alır
    private basketService: BasketService //rotayı alır
  ) { }
  commentCount: number = 0;
  product: Product | undefined;
  productCount: number = 1;
  selectedSize: string = '';
  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService
        .getProductById(parseInt(id))
        .subscribe((product) => (this.product = product));
    }

    this.product?.comments.forEach((element) => {
      this.commentCount += 1;
    });
  }

  increaseCount() {
    if (this.productCount < 20) this.productCount++;
  }

  decreaseCount() {
    if (this.productCount > 1) this.productCount--;
  }

  send_pData_to_service() {
    if (this.product) {
      let specProduct: Product = this.product;

      if (this.selectedSize) {
        specProduct = {
          ...this.product,
          size: [this.selectedSize], // Sadece seçilen beden
        };
      }

      this.basketService.addProduct(
        specProduct,
        this.product.price,
        this.productCount
      );

      this.displaySuccess();
    }
  }

  displaySuccess() {
    const displayMessage = document.getElementById('success');
    if (displayMessage) {
      displayMessage.style.opacity = '1';
      setTimeout(function () {
        displayMessage.style.opacity = '0';
      }, 2000);
    }
  }

  clear_basket() {
    this.basketService.clearBasket();
  }

  setSelectedSize(size: string) {
    if (size) {
      this.selectedSize = size;
    }
  }
}
