import { Component, Input } from '@angular/core';
import { ProductService } from '../product-service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute //rotayı alır
  ) {}
  commentCount: number = 0;
  product: Product | undefined;
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
}
