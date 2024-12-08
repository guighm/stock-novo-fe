import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCadastradaComponent } from './categoria-cadastrada.component';

describe('CategoriaCadastradaComponent', () => {
  let component: CategoriaCadastradaComponent;
  let fixture: ComponentFixture<CategoriaCadastradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaCadastradaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaCadastradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
