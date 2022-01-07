import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailsCommandsComponent } from './recipe-details-commands.component';

describe('RecipeDetailsCommandsComponent', () => {
  let component: RecipeDetailsCommandsComponent;
  let fixture: ComponentFixture<RecipeDetailsCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailsCommandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailsCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
