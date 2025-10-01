import './polyfills';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { SearchCoderbyte } from './app/search-coderbyte/search-coderbyte';


const routes: Routes = [
  { path: '', component: SearchCoderbyte }, // default page
  { path: '**', redirectTo: '' }
];

bootstrapApplication(SearchCoderbyte, {
  providers: [provideRouter(routes)]
});