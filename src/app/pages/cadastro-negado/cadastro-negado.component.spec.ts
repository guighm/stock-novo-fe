import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNegadoComponent } from './cadastro-negado.component';

describe('CadastroNegadoComponent', () => {
  let component: CadastroNegadoComponent;
  let fixture: ComponentFixture<CadastroNegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroNegadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroNegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
