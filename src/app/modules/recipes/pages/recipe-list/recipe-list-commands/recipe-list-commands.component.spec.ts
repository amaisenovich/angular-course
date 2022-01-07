import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListCommandsComponent } from './recipe-list-commands.component';

describe('RecipeListCommandsComponent', () => {
  let component: RecipeListCommandsComponent;
  let fixture: ComponentFixture<RecipeListCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeListCommandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
