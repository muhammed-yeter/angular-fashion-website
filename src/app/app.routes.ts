import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mainpage } from './mainpage/mainpage';
import { Shop } from './shop/shop';
import { ProductDetails } from './product-details/product-details';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'prefix' },
  { path: 'home', component: Mainpage },
  { path: 'shop', component: Shop },
  { path: 'shop/brands/:brand', component: Shop },
  { path: 'shop/categories/:category', component: Shop },
  { path: 'product/id/:id', component: ProductDetails },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
