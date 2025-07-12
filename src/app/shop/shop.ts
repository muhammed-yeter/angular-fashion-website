import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-service';
import { Product } from '../product-model';
import { CommonModule } from '@angular/common';
import { ShopLeftPane } from '../shop-left-pane/shop-left-pane';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.html',
  styleUrl: './shop.css',
  imports: [CommonModule, ShopLeftPane, ProductCard],
})
export class Shop {
  productList: Product[] = [];
  filteredList: Product[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe((list) => (this.productList = list));
    this.route.params.subscribe((params) => {
      const brand = params['brand'];
      const category = params['category'];

      if (brand) {
        this.productService.getProductsByBrand(brand).subscribe((data) => {
          this.filteredList = data;
        });
      } else if (category) {
        this.productService
          .getProductsByCategory(category)
          .subscribe((data) => {
            this.filteredList = data;
          });
      } else {
        this.productService.getProducts().subscribe((data) => {
          this.filteredList = data;
        });
      }
    });
  }
}
