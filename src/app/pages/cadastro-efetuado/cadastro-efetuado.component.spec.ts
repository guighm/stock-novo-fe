import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEfetuadoComponent } from './cadastro-efetuado.component';

describe('CadastroEfetuadoComponent', () => {
  let component: CadastroEfetuadoComponent;
  let fixture: ComponentFixture<CadastroEfetuadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroEfetuadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEfetuadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
