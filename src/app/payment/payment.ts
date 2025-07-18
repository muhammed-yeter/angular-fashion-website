import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BasketService } from '../basket-service';
import { FormsModule } from '@angular/forms';
import Cleave from 'cleave.js';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-payment',
  imports: [FormsModule, CommonModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {
  // VIEWCHILD
  // - ViewChild('expireInput') expireInput kısmına seçim yapacağımız elementin adını yazıyoruz.
  // - ad belirlemek için attribute eklenen kısma diyez (#) ekleyip adı yazıyoruz (bu elementin cardInput'muş) (bu seçimi viewchild yapar)
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

  constructor(private basketService: BasketService) {}
  price: number = 0;

  pay_method: string = 'visa';
  full_name!: string;
  expire_date!: string;
  card_number!: number;
  ccv!: number;
  address!: string;

  buyout_data: string[] = [];
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
      this.buyout_data.push(this.pay_method);
      this.buyout_data.push(this.full_name);
      this.buyout_data.push(this.expire_date);
      this.buyout_data.push(this.card_number.toString());
      this.buyout_data.push(this.ccv.toString());
      this.buyout_data.push(this.address);
      console.log(this.buyout_data);
    } else {
      this.displayError();
    }
  }
  displayError() {
    const displayMessage = document.getElementById('alert');
    if (displayMessage) {
      displayMessage.style.opacity = '1';
      setTimeout(function () {
        displayMessage.style.opacity = '0';
      }, 2000);
    }
  }

  controlName(event: KeyboardEvent): boolean {
    const allowedPattern = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/;
    const key = event.key;

    return allowedPattern.test(key);
  }
}
