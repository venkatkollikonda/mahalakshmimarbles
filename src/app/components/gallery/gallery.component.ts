import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  id: number;
  title: string;
  category: 'kitchen' | 'flooring' | 'bathroom' | 'commercial' | 'outdoor';
  image: string;
  description: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  selectedCategory: string = 'all';
  
  categories = [
    { id: 'all', name: 'All Projects', icon: '🏠' },
    { id: 'kitchen', name: 'Kitchen', icon: '🍳' },
    { id: 'flooring', name: 'Flooring', icon: '📐' },
    { id: 'bathroom', name: 'Bathroom', icon: '🚿' },
    { id: 'commercial', name: 'Commercial', icon: '🏢' },
    { id: 'outdoor', name: 'Outdoor', icon: '🌳' }
  ];

  galleryItems: GalleryItem[] = [
    // Kitchen Projects
    {
      id: 1,
      title: 'Modern Kitchen Countertop',
      category: 'kitchen',
      image: 'kitchen-1.jpg',
      description: 'Black Pearl Granite countertop with waterfall edge'
    },
    {
      id: 2,
      title: 'Classic Kitchen Design',
      category: 'kitchen',
      image: 'kitchen-2.jpg',
      description: 'S White Granite with elegant backsplash'
    },
    {
      id: 3,
      title: 'Contemporary Kitchen',
      category: 'kitchen',
      image: 'kitchen-3.jpg',
      description: 'Steel Gray Granite with modern fixtures'
    },
    {
      id: 4,
      title: 'Luxury Kitchen',
      category: 'kitchen',
      image: 'kitchen-4.jpg',
      description: 'Black Galaxy Granite with gold accents'
    },
    
    // Flooring Projects
    {
      id: 5,
      title: 'Living Room Flooring',
      category: 'flooring',
      image: 'flooring-1.jpg',
      description: 'Kashmir Gold Granite flooring with elegant pattern'
    },
    {
      id: 6,
      title: 'Entrance Hall',
      category: 'flooring',
      image: 'flooring-2.jpg',
      description: 'Makrana White Marble flooring'
    },
    {
      id: 7,
      title: 'Bedroom Flooring',
      category: 'flooring',
      image: 'flooring-3.jpg',
      description: 'Katni Marble with border design'
    },
    {
      id: 8,
      title: 'Corridor Design',
      category: 'flooring',
      image: 'flooring-4.jpg',
      description: 'Tan Brown Granite flooring'
    },
    
    // Bathroom Projects
    {
      id: 9,
      title: 'Modern Bathroom',
      category: 'bathroom',
      image: 'bathroom-1.jpg',
      description: 'Agaria White Marble bathroom with contemporary design'
    },
    {
      id: 10,
      title: 'Luxury Bathroom',
      category: 'bathroom',
      image: 'bathroom-2.jpg',
      description: 'Rainforest Brown Marble feature wall'
    },
    {
      id: 11,
      title: 'Master Bathroom',
      category: 'bathroom',
      image: 'bathroom-3.jpg',
      description: 'P White Granite vanity countertop'
    },
    {
      id: 12,
      title: 'Guest Bathroom',
      category: 'bathroom',
      image: 'bathroom-4.jpg',
      description: 'JK Brown Marble flooring and walls'
    },
    
    // Commercial Projects
    {
      id: 13,
      title: 'Office Reception',
      category: 'commercial',
      image: 'commercial-1.jpg',
      description: 'Absolute Black Granite reception desk'
    },
    {
      id: 14,
      title: 'Hotel Lobby',
      category: 'commercial',
      image: 'commercial-2.jpg',
      description: 'Makrana White Marble grand entrance'
    },
    {
      id: 15,
      title: 'Restaurant Interior',
      category: 'commercial',
      image: 'commercial-3.jpg',
      description: 'Coffee Brown Granite feature wall'
    },
    {
      id: 16,
      title: 'Showroom Design',
      category: 'commercial',
      image: 'commercial-4.jpg',
      description: 'River White Granite flooring'
    },
    
    // Outdoor Projects
    {
      id: 17,
      title: 'Garden Pathway',
      category: 'outdoor',
      image: 'outdoor-1.jpg',
      description: 'Hassan Green Granite outdoor pathway'
    },
    {
      id: 18,
      title: 'Patio Flooring',
      category: 'outdoor',
      image: 'outdoor-2.jpg',
      description: 'Tan Brown Granite patio with seating area'
    },
    {
      id: 19,
      title: 'Pool Deck',
      category: 'outdoor',
      image: 'outdoor-3.jpg',
      description: 'Honey Blue Granite pool surround'
    },
    {
      id: 20,
      title: 'Outdoor Kitchen',
      category: 'outdoor',
      image: 'outdoor-4.jpg',
      description: 'Absolute Black Granite outdoor countertop'
    }
  ];

  get filteredItems(): GalleryItem[] {
    if (this.selectedCategory === 'all') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}




