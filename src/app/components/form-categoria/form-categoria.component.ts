import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaProduto } from '../../interfaces/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-form-categoria',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-categoria.component.html',
  styleUrl: './form-categoria.component.css'
})
export class FormCategoriaComponent implements OnInit {

  formCategoria !: FormGroup;
  novaCategoria !: CategoriaProduto;

  private readonly builder = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly categoria = inject(CategoriaService);

  ngOnInit(): void {

    this.formCategoria = this.builder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  cadastrar() {
    if (this.formCategoria.valid) {
      this.novaCategoria = this.formCategoria.value;
      this.categoria.cadastrarCategoria(this.novaCategoria).subscribe({
        next: () => {
          this.router.navigate(['/categoria-cadastrada']);
        }
      })
    }
  }

}