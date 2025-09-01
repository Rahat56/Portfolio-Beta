import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() scrollToSectionEvent = new EventEmitter<string>();
  
  isMobileMenuOpen = false;

  navItems = [
    { name: 'Home', link: '#home' },
    { name: 'Projects', link: '#projects' },
    { name: 'Skills', link: '#skills' },
    { name: 'About', link: '#about' },
    { name: 'Contact', link: '#contact' }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(sectionId: string) {
    this.scrollToSectionEvent.emit(sectionId);
    this.isMobileMenuOpen = false;
  }
}
