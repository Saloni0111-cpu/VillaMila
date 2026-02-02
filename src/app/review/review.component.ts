import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {

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
