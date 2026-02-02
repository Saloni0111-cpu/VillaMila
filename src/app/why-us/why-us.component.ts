import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'
})
export class WhyUsComponent {


  whyUs = [
    {
      image: "assets/lonavala.webp",
      quantity: "200+",
      description: "Happy Guest"
    },
    {
      image: "assets/lonavala.webp",
      quantity: "200+",
      description: "Villas & Farmhouse"
    },
    {
      image: "assets/lonavala.webp",
      quantity: "200+",
      description: "Locations"
    },
    {
      image: "assets/lonavala.webp",
      quantity: "200+",
      description: "Happy Clients"
    }

  ]
}
