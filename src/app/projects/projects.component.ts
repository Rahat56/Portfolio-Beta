import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Klovercloud Official Website',
      description: 'The official website serves as a showcase for Klovercloud\'s in-house product, highlighting its features and capabilities.',
      technologies: ['Angular', 'Material-UI', 'Tailwind', 'Chart.js'],
      image: 'assets/project1.jpg'
    },
    {
      title: 'MultiCluster WebApp',
      description: 'Klovercloud\'s in-house product is a cost-effective DevOps platform on Kubernetes, showcased on its website, enabling scalable applications.',
      technologies: ['Angular', 'Material-UI', 'Tailwind', 'Chart.js'],
      image: 'assets/project2.jpg'
    },
    {
      title: 'Cloud Monitoring Tool',
      description: 'The application expertly visualizes resource activities in a cloud infrastructure, providing valuable insights and optimization tips.',
      technologies: ['Angular', 'Material-UI', 'Tailwind', 'Chart.js'],
      image: 'assets/project3.jpg'
    }
  ];
}
