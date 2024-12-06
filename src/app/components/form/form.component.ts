import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  formProduto !: FormGroup;
  erros !: string[];

  private readonly builder = inject(FormBuilder);
  private readonly router = inject(Router);

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
    console.log(this.pegarErros());
    this.pegarErros();
    if (this.erros.length === 0) {
      this.router.navigate(["cadastro-efetuado"]);
    } else {
      localStorage.setItem("erros", JSON.stringify(this.erros));
      this.router.navigate(["cadastro-negado"]);
    }
  }

  pegarErros() {
    this.erros = [];
    Object.keys(this.formProduto.controls).forEach((key) => {
      const control = this.formProduto.get(key);
      if (control?.errors) {
        this.erros.push(key);
      }
    })
  }

}
