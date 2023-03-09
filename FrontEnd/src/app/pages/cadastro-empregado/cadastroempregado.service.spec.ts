import { TestBed } from '@angular/core/testing';

import { CadastroempregadoService } from './cadastroempregado.service';

describe('CadastroempregadoService', () => {
  let service: CadastroempregadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroempregadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
