import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  formProduto !: FormGroup;

  private readonly builder = inject(FormBuilder);

  ngOnInit(): void {
    this.formProduto = this.builder.group({
      nome: ['', Validators.required],
      peso: ['', Validators.required],
      comprimento: ['', Validators.required],
      altura: ['', Validators.required],
      descricao: ['', Validators.required],
      categoria: ['', Validators.required],
      getin: ['', Validators.required],
      ncm: ['', Validators.required],
      marca: ['', Validators.required],
      quantidadeMinima: ['', Validators.required],
      valorEntrada: ['', Validators.required],
      valorSaida: ['', Validators.required],
      observacoes: ['']
    });
  }

  cadastrar() {
    console.log(this.formProduto.value);
  }

}
