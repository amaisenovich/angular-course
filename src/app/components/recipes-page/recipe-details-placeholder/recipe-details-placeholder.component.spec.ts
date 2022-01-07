import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailsPlaceholderComponent } from './recipe-details-placeholder.component';

describe('RecipeDetailsPlaceholderComponent', () => {
  let component: RecipeDetailsPlaceholderComponent;
  let fixture: ComponentFixture<RecipeDetailsPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailsPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailsPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
