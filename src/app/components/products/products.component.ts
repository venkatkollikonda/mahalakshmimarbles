import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  selectedCategory = 'all';

  categories = [
    { id: 'all', name: 'All Products' },
    { id: 'granite', name: 'Granites' },
    { id: 'marble', name: 'Marbles' }
  ];

  products = [
    // Granites
    {
      id: 1,
      name: 'Black Pearl Granite - Polished',
      category: 'granite',
      description: 'Premium black granite with silver flecks, mirror finish',
      origin: 'India',
      features: ['Mirror Polish', 'Scratch Resistant', 'Elegant Black']
    },
    {
      id: 2,
      name: 'Black Pearl Granite - Leather/Lapotra',
      category: 'granite',
      description: 'Textured black granite with matte leather finish',
      origin: 'India',
      features: ['Leather Finish', 'Anti-Slip', 'Modern Look']
    },
    {
      id: 3,
      name: 'Steel Gray Granite - Polished',
      category: 'granite',
      description: 'Sophisticated gray granite with shiny finish',
      origin: 'India',
      features: ['High Gloss', 'Uniform Pattern', 'Contemporary']
    },
    {
      id: 4,
      name: 'Steel Gray Granite - Leather/Lapotra',
      category: 'granite',
      description: 'Gray granite with textured leather finish',
      origin: 'India',
      features: ['Textured Finish', 'Stain Resistant', 'Durable']
    },
    {
      id: 5,
      name: 'S White Granite',
      category: 'granite',
      description: 'Classic white granite with grey patterns, Sadarahalli quality',
      origin: 'Karnataka, India',
      features: ['Pure White Base', 'Versatile', 'Kitchen Friendly']
    },
    {
      id: 6,
      name: 'P White Granite',
      category: 'granite',
      description: 'Premium white granite with subtle grey veining',
      origin: 'India',
      features: ['Platinum Grade', 'Heat Resistant', 'Easy Maintenance']
    },
    {
      id: 7,
      name: 'Black Galaxy Granite',
      category: 'granite',
      description: 'Luxurious black granite with golden speckles',
      origin: 'Andhra Pradesh, India',
      features: ['Gold Sparkles', 'Premium Quality', 'Scratch Proof']
    },
    {
      id: 8,
      name: 'Tan Brown Granite',
      category: 'granite',
      description: 'Rich brown granite with natural patterns',
      origin: 'Tamil Nadu, India',
      features: ['Water Resistant', 'Long-lasting', 'Warm Tones']
    },
    {
      id: 9,
      name: 'Honey Blue Granite',
      category: 'granite',
      description: 'Stunning blue-grey granite with golden honey tones',
      origin: 'Karnataka, India',
      features: ['Unique Color', 'Premium Quality', 'Heat Resistant']
    },
    {
      id: 10,
      name: 'Coffee Brown Granite',
      category: 'granite',
      description: 'Deep coffee brown granite with rich patterns',
      origin: 'Tamil Nadu, India',
      features: ['Deep Brown', 'Elegant Pattern', 'Stain Resistant']
    },
    {
      id: 11,
      name: 'Kashmir Gold Granite',
      category: 'granite',
      description: 'Warm beige granite with golden brown veining',
      origin: 'Andhra Pradesh, India',
      features: ['Warm Tones', 'Versatile', 'Easy Care']
    },
    {
      id: 12,
      name: 'River White Granite',
      category: 'granite',
      description: 'White granite with grey and burgundy veining',
      origin: 'Karnataka, India',
      features: ['Unique Veining', 'Premium Look', 'Durable']
    },
    {
      id: 13,
      name: 'Absolute Black Granite',
      category: 'granite',
      description: 'Pure jet black granite, solid color with no patterns',
      origin: 'Telangana, India',
      features: ['Solid Black', 'Premium Grade', 'Mirror Finish']
    },
    {
      id: 14,
      name: 'Hassan Green Granite',
      category: 'granite',
      description: 'Unique green granite with natural patterns',
      origin: 'Karnataka, India',
      features: ['Rare Color', 'Natural Beauty', 'Distinctive']
    },
    // Marbles
    {
      id: 15,
      name: 'JK Brown Marble',
      category: 'marble',
      description: 'Rich brown marble with distinctive veining patterns',
      origin: 'Rajasthan, India',
      features: ['Warm Brown', 'Natural Veining', 'Premium Grade']
    },
    {
      id: 16,
      name: 'Agaria White Marble',
      category: 'marble',
      description: 'Pure white marble with subtle grey veining',
      origin: 'Rajasthan, India',
      features: ['Elegant White', 'Fine Grain', 'Smooth Finish']
    },
    {
      id: 17,
      name: 'Makrana White Marble',
      category: 'marble',
      description: 'Pure white marble used in Taj Mahal, premium quality',
      origin: 'Makrana, Rajasthan',
      features: ['Taj Mahal Quality', 'Pure White', 'Cultural Heritage']
    },
    {
      id: 18,
      name: 'Albeta Marble',
      category: 'marble',
      description: 'Elegant beige marble with brown veining',
      origin: 'Rajasthan, India',
      features: ['Beige Tone', 'Classic Look', 'Versatile']
    },
    {
      id: 19,
      name: 'Katni Marble',
      category: 'marble',
      description: 'Cream marble with light veining, popular for flooring',
      origin: 'Madhya Pradesh, India',
      features: ['Cream Color', 'Affordable', 'Flooring Favorite']
    },
    {
      id: 20,
      name: 'Rainforest Brown Marble',
      category: 'marble',
      description: 'Exotic brown marble with dramatic patterns',
      origin: 'Rajasthan, India',
      features: ['Unique Patterns', 'Rich Brown', 'Statement Piece']
    },
    {
      id: 21,
      name: 'Pink Marble',
      category: 'marble',
      description: 'Beautiful pink marble with delicate veining',
      origin: 'Rajasthan, India',
      features: ['Soft Pink', 'Elegant', 'Decorative']
    },
    {
      id: 22,
      name: 'Green Marble',
      category: 'marble',
      description: 'Unique green marble with natural patterns',
      origin: 'Rajasthan, India',
      features: ['Unique Color', 'Natural Beauty', 'Eye-catching']
    }
  ];

  get filteredProducts() {
    if (this.selectedCategory === 'all') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }
}

