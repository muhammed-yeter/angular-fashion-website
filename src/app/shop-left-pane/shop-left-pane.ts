import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../product-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-left-pane',
  imports: [RouterLink, CommonModule],
  templateUrl: './shop-left-pane.html',
  styleUrl: './shop-left-pane.css',
})
export class ShopLeftPane {
  @Input() productList: Product[] = [];
  filteredBrands: Product[] = [];
  filteredCats: Product[] = [];
  ngOnInit() {
    const allBrands: string[] = [];
    this.filteredBrands = this.productList.filter((product) => {
      const brandName = product.brand;
      if (!allBrands.includes(brandName)) {
        allBrands.push(brandName);
        return true;
      }
      return false;
    });

    const allCats: string[] = [];
    this.filteredCats = this.productList.filter((product) => {
      const catName = product.category;
      if (!allCats.includes(catName)) {
        allCats.push(catName);
        return true;
      }
      return false;
    });
  }
}
