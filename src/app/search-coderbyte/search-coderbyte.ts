import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from './highlight.pipe';
@Component({
  selector: 'app-search-coderbyte',
  imports: [CommonModule, FormsModule, HighlightPipe],
  templateUrl: './search-coderbyte.html',
  styleUrl: './search-coderbyte.scss'
})
export class SearchCoderbyte {
  searchTerm = '';

  articles = [
    { title: 'Angular Basics', content: 'Angular is a framework for building web applications.' },
    { title: 'React Overview', content: 'React is a library for building user interfaces.' },
    { title: 'Vue Guide', content: 'Vue.js is a progressive JavaScript framework.' },
    { title: 'JavaScript', content: 'JavaScript is the language of the web.' }
  ];

  get filteredArticles() {
    const term = this.searchTerm.toLowerCase();
    if (!term) return this.articles;

    return this.articles.filter(a =>
      a.title.toLowerCase().includes(term) ||
      a.content.toLowerCase().includes(term)
    );
  }
}