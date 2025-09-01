import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Output() scrollToSectionEvent = new EventEmitter<string>();

  scrollToSection(sectionId: string) {
    this.scrollToSectionEvent.emit(sectionId);
  }
}
