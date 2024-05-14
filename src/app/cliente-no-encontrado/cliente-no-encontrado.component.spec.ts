import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteNoEncontradoComponent } from './cliente-no-encontrado.component';

describe('ClienteNoEncontradoComponent', () => {
  let component: ClienteNoEncontradoComponent;
  let fixture: ComponentFixture<ClienteNoEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteNoEncontradoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteNoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
