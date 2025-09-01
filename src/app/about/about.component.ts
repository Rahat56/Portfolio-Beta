import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  skills = {
    languages: ['JavaScript', 'TypeScript', 'C'],
    frameworks: ['Angular', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'TailwindCSS', 'Material-UI'],
    other: ['Object-Oriented Programming (OOP)', 'Problem Solving', 'Google Search', 'Fluent in English'],
    tools: ['Chrome Dev Tools', 'VSCode', 'Postman', 'Heroku', 'Netlify', 'Slack', 'Jira', 'CodeBlocks']
  };
}
