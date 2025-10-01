import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCoderbyte } from './search-coderbyte';

describe('SearchCoderbyte', () => {
  let component: SearchCoderbyte;
  let fixture: ComponentFixture<SearchCoderbyte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCoderbyte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCoderbyte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
