import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchCoderbyte } from './search-coderbyte/search-coderbyte';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
title = 'my-app';
}
