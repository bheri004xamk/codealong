import { TestBed } from '@angular/core/testing';

import { TehtavalistaService } from './tehtavalista.service';

describe('TehtavalistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TehtavalistaService = TestBed.get(TehtavalistaService);
    expect(service).toBeTruthy();
  });
});
