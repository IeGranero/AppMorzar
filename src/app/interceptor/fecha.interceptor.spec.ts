import { TestBed } from '@angular/core/testing';

import { FechaInterceptor } from './fecha.interceptor';

describe('FechaInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FechaInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FechaInterceptor = TestBed.inject(FechaInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
