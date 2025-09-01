import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmitContact() {
    console.log('Contact form submitted:', this.contactForm);
    alert('Message sent successfully!');
    this.contactForm = { name: '', email: '', message: '' };
  }
}
