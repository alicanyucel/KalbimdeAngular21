import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  articles = [
    {
      id: 1,
      title: 'Getting Started with Angular 21',
      author: 'Ali Can Yücel',
      date: '2026-03-28',
      category: 'Technology',
      image: 'https://via.placeholder.com/400x250?text=Angular',
      excerpt: 'Learn the basics of Angular 21 and start building amazing web applications with modern features and performance improvements.',
      content: 'Angular 21 brings numerous improvements including better performance, enhanced developer experience, and new features for building scalable applications. In this article, we explore the key features and how to get started.'
    },
    {
      id: 2,
      title: 'Building Beautiful UIs with Bootstrap',
      author: 'Ali Can Yücel',
      date: '2026-03-27',
      category: 'Design',
      image: 'https://via.placeholder.com/400x250?text=Bootstrap',
      excerpt: 'Master Bootstrap framework to create responsive and professional-looking web interfaces quickly and efficiently.',
      content: 'Bootstrap is one of the most popular front-end frameworks for building responsive websites. This comprehensive guide covers components, utilities, and best practices for creating beautiful user interfaces.'
    },
    {
      id: 3,
      title: 'Docker Container Best Practices',
      author: 'Ali Can Yücel',
      date: '2026-03-26',
      category: 'DevOps',
      image: 'https://via.placeholder.com/400x250?text=Docker',
      excerpt: 'Explore Docker best practices for containerizing applications and deploying them efficiently in production environments.',
      content: 'Containerization with Docker has revolutionized the way we deploy applications. Learn essential practices for writing Dockerfiles, managing containers, and orchestrating them with Docker Compose.'
    }
  ];
}
