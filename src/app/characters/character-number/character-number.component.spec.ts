import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterNumberComponent } from './character-number.component';

describe('CharacterNumberComponent', () => {
  let component: CharacterNumberComponent;
  let fixture: ComponentFixture<CharacterNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
