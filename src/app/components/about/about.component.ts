import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      description: 'With over 20 years of experience in the granite and marble industry.'
    },
    {
      name: 'Priya Sharma',
      role: 'Design Consultant',
      description: 'Expert in helping clients choose perfect stones for their spaces.'
    },
    {
      name: 'Amit Patel',
      role: 'Installation Manager',
      description: 'Leads our team of skilled craftsmen with precision and care.'
    },
    {
      name: 'Sunita Reddy',
      role: 'Customer Relations',
      description: 'Ensures every customer receives exceptional service and support.'
    }
  ];

  values = [
    {
      icon: '🎯',
      title: 'Quality First',
      description: 'We never compromise on the quality of our materials and workmanship.'
    },
    {
      icon: '🤝',
      title: 'Customer Satisfaction',
      description: 'Your happiness and satisfaction are our top priorities.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace new techniques and technologies to serve you better.'
    },
    {
      icon: '🌿',
      title: 'Sustainability',
      description: 'Committed to environmentally responsible sourcing and practices.'
    }
  ];
}

