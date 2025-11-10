import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      icon: '🏠',
      title: 'Kitchen Countertops',
      description: 'Transform your kitchen with elegant granite or marble countertops. We offer custom cutting, polishing, and installation services for the perfect fit.',
      features: ['Custom Measurements', 'Professional Cutting', 'Edge Finishing', 'Expert Installation']
    },
    {
      icon: '🏢',
      title: 'Flooring Solutions',
      description: 'Premium quality granite and marble flooring for residential and commercial spaces. Durable, elegant, and easy to maintain.',
      features: ['Residential Flooring', 'Commercial Spaces', 'Polishing Services', 'Anti-slip Finishing']
    },
    {
      icon: '🎨',
      title: 'Wall Cladding',
      description: 'Enhance your walls with natural stone cladding. Perfect for both interior and exterior applications.',
      features: ['Interior Walls', 'Exterior Facades', 'Feature Walls', 'Custom Designs']
    },
    {
      icon: '🛁',
      title: 'Bathroom Vanities',
      description: 'Luxurious marble and granite bathroom countertops and vanities. Water-resistant and elegant solutions.',
      features: ['Custom Vanity Tops', 'Sink Integration', 'Waterproofing', 'Premium Finish']
    },
    {
      icon: '🏛️',
      title: 'Stairs & Steps',
      description: 'Elegant granite and marble stairs that combine safety with aesthetics. Non-slip finishes available.',
      features: ['Indoor Stairs', 'Outdoor Steps', 'Anti-slip Treatment', 'Custom Designs']
    },
    {
      icon: '✨',
      title: 'Restoration & Polishing',
      description: 'Bring back the shine to your existing granite and marble surfaces. Professional restoration and maintenance services.',
      features: ['Surface Restoration', 'Deep Cleaning', 'Polishing', 'Sealing']
    }
  ];

  process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your requirements, preferences, and budget to understand your vision.'
    },
    {
      step: '02',
      title: 'Material Selection',
      description: 'Choose from our wide range of premium granites and marbles that suit your style.'
    },
    {
      step: '03',
      title: 'Measurement & Design',
      description: 'Our experts take precise measurements and create custom designs for your space.'
    },
    {
      step: '04',
      title: 'Fabrication',
      description: 'State-of-the-art cutting, shaping, and finishing of your selected stone.'
    },
    {
      step: '05',
      title: 'Installation',
      description: 'Professional installation by skilled craftsmen with attention to every detail.'
    },
    {
      step: '06',
      title: 'Final Inspection',
      description: 'Quality check and customer walkthrough to ensure complete satisfaction.'
    }
  ];
}

