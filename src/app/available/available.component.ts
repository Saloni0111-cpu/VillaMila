import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-available',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './available.component.html',
  styleUrl: './available.component.scss'
})
export class AvailableComponent {
  selectedLocation: string = 'All';

  locations = [
    'All',
    'Lonavala',
    'Varanasi',
    'Alibaug',
    'Karjat',
    'Explore More'
  ];

  selectLocation(location: string) {
    this.selectedLocation = location;
  }

  get filteredVillas() {
    if (this.selectedLocation === 'All' || this.selectedLocation === 'Explore More') {
      return this.villas;
    }
    return this.villas.filter(villa =>
      villa.city.toLowerCase() === this.selectedLocation.toLowerCase()
    );
  }

  get topRatedVillas() {
    return [...this.villas].sort((a, b) => b.rating - a.rating);
  }

  villas = [
    {
      image: 'assets/lonavala.webp',
      rating: 4.0,
      name: 'The Grey Medley',
      location: 'Lonavala, Maharashtra',
      city: 'Lonavala',
      guests: 10,
      rooms: 4,
      baths: 2,
      originalPrice: 3999,
      discountedPrice: 2999
    },
    {
      image: 'assets/lonavala.webp',
      rating: 4.8,
      name: 'The Ganga House',
      location: 'Varanasi, Uttar Pradesh',
      city: 'Varanasi',
      guests: 10,
      rooms: 4,
      baths: 2,
      originalPrice: 3999,
      discountedPrice: 2999
    },
    {
      image: 'assets/lonavala.webp',
      rating: 4.5,
      name: 'Pranaam',
      location: 'Alibaug, Maharashtra',
      city: 'Alibaug',
      guests: 6,
      rooms: 3,
      baths: 3,
      originalPrice: 5500,
      discountedPrice: 4200
    },
    {
      image: 'assets/lonavala.webp',
      rating: 4.7,
      name: 'Gardenea',
      location: 'Karjat, Maharashtra',
      city: 'Karjat',
      guests: 12,
      rooms: 5,
      baths: 4,
      originalPrice: 7000,
      discountedPrice: 5500
    }
  ];
}
