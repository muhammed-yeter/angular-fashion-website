import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-mainpage',
  imports: [RouterLink],
  templateUrl: './mainpage.html',
  styleUrls: ['./mainpage.css'],
})
export class Mainpage implements OnInit {
  ngOnInit() {
    AOS.init({
      once: true,
      duration: 600,
      easing: 'ease-out',
    });

    const sr = ScrollReveal({
      distance: '10px',
      duration: 600,
      easing: 'ease-out',
      reset: false,
    });

    sr.reveal('.hero-content.first', {
      origin: 'top',
      distance: '10px',
      viewFactor: 0.3,
    });
    sr.reveal('.outfit-card', {
      origin: 'bottom',
      distance: '10px',
      interval: 100,
      viewFactor: 0.3,
    });
    sr.reveal('.animator:nth-child(odd) .popular-model-text', {
      origin: 'right',
      distance: '30px',
      viewFactor: 0.8,
    });
    sr.reveal('.animator:nth-child(even) .popular-model-text', {
      origin: 'left',
      distance: '30px',
      viewFactor: 0.8,
    });
    sr.reveal('.cat-card', {
      origin: 'bottom',
      distance: '50px',
      interval: 150,
      viewFactor: 0.5,
    });
  }
}
