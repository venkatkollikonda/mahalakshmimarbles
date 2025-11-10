import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  isSubmitted = false;

  contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['Mahalakshmi Granites and Marbles', 'Guntur, Andhra Pradesh']
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+91 97001 76998', 'WhatsApp Available']
    },
    {
      icon: '📧',
      title: 'Email Us',
      details: ['info@mahalakshmigranites.com', 'Contact us for quotes']
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM']
    }
  ];

  onSubmit() {
    // Basic validation
    if (this.formData.name && this.formData.email && this.formData.phone && this.formData.message) {
      console.log('Form submitted:', this.formData);
      this.isSubmitted = true;
      
      // Reset form after 3 seconds
      setTimeout(() => {
        this.formData = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        };
        this.isSubmitted = false;
      }, 3000);
    }
  }
}

