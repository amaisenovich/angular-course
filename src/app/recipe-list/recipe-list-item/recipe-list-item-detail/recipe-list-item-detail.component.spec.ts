import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListItemDetailComponent } from './recipe-list-item-detail.component';

describe('RecipeListItemDetailComponent', () => {
  let component: RecipeListItemDetailComponent;
  let fixture: ComponentFixture<RecipeListItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeListItemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
