import { TestBed } from '@angular/core/testing';

import { produtosService } from './produtos.service';

describe('Produtos Service', () => {
  let service: produtosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(produtosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
