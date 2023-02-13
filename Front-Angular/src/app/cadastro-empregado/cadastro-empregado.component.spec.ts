import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmpregadoComponent } from './cadastro-empregado.component';

describe('CadastroEmpregadoComponent', () => {
  let component: CadastroEmpregadoComponent;
  let fixture: ComponentFixture<CadastroEmpregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEmpregadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
