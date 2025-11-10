import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  features = [
    {
      icon: '🎯',
      title: 'Premium Quality',
      description: 'We source the finest quality granites and marbles from around the world.'
    },
    {
      icon: '⚡',
      title: 'Expert Installation',
      description: 'Professional installation services with attention to every detail.'
    },
    {
      icon: '💎',
      title: 'Custom Designs',
      description: 'Tailored solutions to match your unique style and requirements.'
    },
    {
      icon: '🛡️',
      title: 'Durability Guaranteed',
      description: 'Long-lasting materials that stand the test of time.'
    }
  ];

  popularProducts = [
    {
      name: 'Black Pearl Granite',
      type: 'Polished & Leather Finish',
      image: 'granite-1'
    },
    {
      name: 'Black Galaxy Granite',
      type: 'Premium Andhra Pradesh',
      image: 'granite-3'
    },
    {
      name: 'Steel Gray Granite',
      type: 'Polished & Leather Finish',
      image: 'granite-2'
    },
    {
      name: 'JK Brown Marble',
      type: 'Rajasthani Marble',
      image: 'marble-1'
    }
  ];
}

