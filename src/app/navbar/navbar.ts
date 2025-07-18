import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasketService } from '../basket-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private basketService: BasketService) { }

  basketCount: number = 0;
  ngOnInit() {
    this.basketService.currentMessage.subscribe((result) => this.basketCount = result)
  }
}
