import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() id: number = 0;
  @Input() imageURL: string = '';
  @Input() name: string = '';
  @Input() category: string = '';
  @Input() brand: string = '';
  @Input() price: number = 0.0;
  @Input() size?: string[];
  @Input() material?: string;
}
