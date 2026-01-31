import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {


  destinationsRows = [
  [
    { name: 'Lonavala', img: 'assets/lonavala.webp' },
    { name: 'Alibaug', img: 'assets/lonavala.webp' },
    { name: 'Coorg', img: 'assets/lonavala.webp' },
    { name: 'Udaipur', img: 'assets/lonavala.webp' },
    { name: 'Jaipur', img: 'assets/lonavala.webp' },
    { name: 'Nashik', img: 'assets/lonavala.webp' },
    { name: 'Ooty', img: 'assets/lonavala.webp' },
    { name: 'Goa', img: 'assets/lonavala.webp' },
  ],
  [
    { name: 'Jaipur', img: 'assets/lonavala.webp' },
    { name: 'Nashik', img: 'assets/lonavala.webp' },
    { name: 'Ooty', img: 'assets/lonavala.webp' },
    { name: 'Goa', img: 'assets/lonavala.webp' },
    { name: 'Jaipur', img: 'assets/lonavala.webp' },
    { name: 'Nashik', img: 'assets/lonavala.webp' },
    { name: 'Ooty', img: 'assets/lonavala.webp' },
    { name: 'Goa', img: 'assets/lonavala.webp' },
  ]
];

}
