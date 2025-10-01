import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { SearchCoderbyte } from './app/search-coderbyte/search-coderbyte';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(SearchCoderbyte, config, context);

export default bootstrap;
