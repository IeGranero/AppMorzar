import { ComponentFixture, TestBed } from '@angular/core/testing';

import { nuevoSitioComponent } from './nuevoSitio.component';

describe('nuevoSitioComponent', () => {
  let component: nuevoSitioComponent;
  let fixture: ComponentFixture<nuevoSitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ nuevoSitioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(nuevoSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
