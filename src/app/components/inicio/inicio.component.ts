import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  responsiveOptions: any[] | undefined;

  products: any = [
    {
      name: 'Dog chow adultosraza pequeña y mini 8 kg',
      image: '/assets/images/DOG-CHOW-ADULTO-RPM-8-KG-removebg.png',
      price: '39.99',
    },
    {
      name: 'Proplan gato adulto de 3 kg',
      image: '/assets/images/PRO-GATO-ADT-3-KG-removebg.png',
      price: '40.99',
    },
    {
      name: 'Kong Classic',
      image: '/assets/images/kong-classic--removebg.png',
      price: '15.57',
    },
    {
      name: 'Rimax arenero semicubierto con pala, color gris',
      image:
        '/assets/images/rimax-arenero-semicubierto-con-pala-color-gris-removebg.png',
      price: '23.50',
    },
  ];
  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
