import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaDiarioComponent } from './caixa-diario.component';

describe('CaixaDiarioComponent', () => {
  let component: CaixaDiarioComponent;
  let fixture: ComponentFixture<CaixaDiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixaDiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaixaDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
