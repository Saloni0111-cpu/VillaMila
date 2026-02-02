import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent {

  collections = [
    {
      title: 'Monsoon Escape',
      image: 'assets/lonavala.webp',
      count: '12,987 available'
    },
    {
      title: 'Winter Retreat',
      image: 'assets/lonavala.webp',
      count: '8,452 available'
    },
    {
      title: 'Villas for wedding',
      image: 'assets/lonavala.webp',
      count: '5,123 available'
    },
    {
      title: 'Beach Villas',
      image: 'assets/lonavala.webp',
      count: '10,234 available'
    }
  ];

  blogs = [
    {
      title: 'Bill Walsh leadership lesson',
      image: 'assets/lonavala.webp',
      duration: '5 min read',
      description: 'Discover the secrets of transforming a struggling organization into a world-class winner.'
    },
    {
      title: 'The Art of Modern Architecture',
      image: 'assets/lonavala.webp',
      duration: '8 min read',
      description: 'Explore how modern villas are redefining luxury through sustainable and sleek design.'
    },
    {
      title: 'Monsoon Travel Essentials',
      image: 'assets/lonavala.webp',
      duration: '4 min read',
      description: 'Everything you need to pack for your next tropical getaway during the rainy season.'
    }
  ];
}
