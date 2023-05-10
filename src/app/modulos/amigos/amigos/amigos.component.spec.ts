import { ComponentFixture, TestBed } from '@angular/core/testing';

import { amigosComponent } from './amigos.component';

describe('amigosComponent', () => {
  let component: amigosComponent;
  let fixture: ComponentFixture<amigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ amigosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(amigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
