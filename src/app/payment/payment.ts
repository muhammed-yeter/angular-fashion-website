import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BasketService } from '../basket-service';
import { FormsModule } from '@angular/forms';
import Cleave from 'cleave.js';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PaymentItem } from '../basketitem-model';
import { OrderService } from '../order-service';
@Component({
  selector: 'app-payment',
  imports: [FormsModule, CommonModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {
  // VIEWCHILD
  // - ViewChild('expireInput') expireInput kısmına seçim yapacağımız elementin adını yazıyoruz.
  // - ad belirlemek için attribute eklenen kısma diyez (#) ekleyip adı yazıyoruz
  // - ViewChild ngAfterViewInit ile çalışır çünkü componentin view’ı çizildikten sonra erişilebilir olur

  //ElementRef
  // - Angular’ın DOM elementiyle çalışan özel sınıfı. İçindeki nativeElement ile doğrudan HTML elementine ulaşılabilir.

  @ViewChild('expireInput') expireInput!: ElementRef;
  @ViewChild('cardInput') cardInput!: ElementRef;
  @ViewChild('cvcInput') cvcInput!: ElementRef;
  @ViewChild('payment_method') paymentMethod!: ElementRef<HTMLSelectElement>;
  ngAfterViewInit() {
    new Cleave(this.expireInput.nativeElement, {
      date: true, //tarih
      datePattern: ['m', 'y'], //ay, yıl
    });
    new Cleave(this.cardInput.nativeElement, {
      blocks: [4, 4, 4, 4], //4'er gruplar halinde 4 adet. böylece karakter sınırlandırmasına gerek kalmıyor.
      delimiter: ' ', // ayırırken ne kullanacağını seçiyoruz.
      numericOnly: true, // sadece sayı
    });
  }

  constructor(
    private basketService: BasketService,
    private router: Router,
    private orderService: OrderService
  ) {}
  price: number = 0;

  pay_method: string = 'visa';
  full_name!: string;
  expire_date!: string;
  card_number!: number;
  ccv!: number;
  address!: string;

  buyout_data: PaymentItem[] = [];
  ngOnInit() {
    this.basketService
      .getTotalPrice()
      .subscribe((result) => (this.price = result));
  }

  setValues() {
    this.pay_method = this.paymentMethod.nativeElement.value;
    this.buyout_data = [];
    if (
      this.pay_method &&
      this.full_name &&
      this.expire_date &&
      this.card_number &&
      this.ccv &&
      this.address
    ) {
      const buyoutItem: PaymentItem = {
        id: crypto.randomUUID(),
        pay_method: this.pay_method,
        address: this.address,
        card_number: this.card_number,
        ccv: this.ccv,
        expire_date: this.expire_date.toString(),
        full_name: this.full_name,
      };
      this.orderService.addOrder(buyoutItem).subscribe((result) => {
        console.log(result);
        this.basketService.clearBasket();
        this.router.navigate([`/thanks`]);
      });
    } else {
      this.displayError();
    }
  }
  displayError() {
    const displayMessage = document.getElementById('alert');
    if (displayMessage) {
      displayMessage.style.display = 'block';
      displayMessage.style.opacity = '1';
      setTimeout(function () {
        displayMessage.style.opacity = '0';
      }, 2000);
      setTimeout(() => {
        displayMessage.style.display = 'none';
      }, 2100);
    }
  }

  controlName(event: KeyboardEvent): boolean {
    const allowedPattern = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/;
    const key = event.key;

    return allowedPattern.test(key);
  }
}
