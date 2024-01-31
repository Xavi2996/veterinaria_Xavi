import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  responsiveOptions: any[] | undefined;
  responsiveOptionsTest: any[] | undefined;

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
  testimonios: any = [
    {
      testimonial:
        '"Estoy encantado con la atención de Tyguspet. Mi perro Max recibió cuidados excepcionales. El equipo es amable y profesional,brindando un servicio integral. Además, la tienda online"',
      user: 'Juan, dueño de Max.',
    },
    {
      testimonial:
        '"¡Increíble experiencia en Tyguspet! El personal es amable y atento, y siempre se nota el amor y cuidado que tienen hacia los animales. Recomiendo Tyguspet a todos los amantes de los animales".',
      user: 'Juan, dueño de Max.',
    },
    {
      testimonial:
        '"Gracias a Tyguspet por brindar atención veterinaria excepcional a mi mascota. Siempre me siento tranquilo sabiendo que mi amigo peludo está en buenas manos"',
      user: 'Juan, dueño de Max.',
    },
    {
      testimonial:
        '"Tyguspet es más que una veterinaria, es una familia que se preocupa profundamente por la salud y el bienestar de nuestros animales. Confío plenamente en su experiencia y profesionalismo"',
      user: 'Juan, dueño de Max.',
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

    this.responsiveOptionsTest = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 1,
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
