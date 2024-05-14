import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBComponent } from './cb.component';

describe('CBComponent', () => {
  let component: CBComponent;
  let fixture: ComponentFixture<CBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
