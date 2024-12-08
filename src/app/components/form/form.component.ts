import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../interfaces/produto';
import { CategoriaService } from '../../services/categoria.service';
import { CategoriaCadastrada } from '../../interfaces/categoria-cadastrada';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  formProduto !: FormGroup;
  erros !: string[];
  categorias !: CategoriaCadastrada[];
  novoProduto !: Produto;

  private readonly builder = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly produto = inject(ProdutoService);
  private readonly categoria = inject(CategoriaService);

  ngOnInit(): void {

    this.categoria.listarCategorias().subscribe({
      next: (response) => {
        this.categorias = response.body!;
      }
    })
    this.formProduto = this.builder.group({
      nome: ['', Validators.required],
      peso: ['', Validators.required],
      comprimento: ['', Validators.required],
      largura: ['', Validators.required],
      descricao: ['', Validators.required],
      categoriaID: ['', Validators.required],
      GETIN: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      NCM: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      marca: ['', Validators.required],
      quantidadeMinima: ['', Validators.required],
      valorEntrada: ['', Validators.required],
      valorSaida: ['', Validators.required],
      observacoes: ['']
    });
  }

  cadastrar() {
    if (this.formProduto.valid) {
      this.novoProduto = {
        quantidadeMinima: this.formProduto.value.quantidadeMinima,
        nome: this.formProduto.value.nome,
        categoriaID: Number(this.formProduto.value.categoriaID),
        descricao: this.formProduto.value.descricao,
        marca: this.formProduto.value.marca,
        peso: this.formProduto.value.peso,
        comprimento: this.formProduto.value.comprimento,
        largura: this.formProduto.value.largura,
        GETIN: this.formProduto.value.GETIN,
        NCM: this.formProduto.value.NCM,
        valorEntrada: this.formProduto.value.valorEntrada,
        valorSaida: this.formProduto.value.valorSaida
      };

      if (this.formProduto.value.observacoes !== '') {
        this.novoProduto.observacoes = this.formProduto.value.observacoes;
      }
      this.produto.cadastrarProduto(this.novoProduto).subscribe({
        next: () => {
          this.router.navigate(["cadastro-efetuado"]);
        },
        error: (err) => {
          if (err.status === 409) {
            this.router.navigate(["/conflict"]);
          }
        }
      });
    } else {
      this.pegarErros();
      localStorage.setItem("erros", JSON.stringify(this.erros));
      this.router.navigate(["cadastro-negado"]);
    }
  }

  pegarErros() {
    this.erros = [];
    Object.keys(this.formProduto.controls).forEach((key) => {
      const control = this.formProduto.get(key);
      if (control?.errors) {
        switch (key) {
          case 'nome':
            this.erros.push('Nome');
            break;
          case 'peso':
            this.erros.push('Peso');
            break;
          case 'comprimento':
            this.erros.push('Comprimento');
            break;
          case 'largura':
            this.erros.push('Largura');
            break;
          case 'descricao':
            this.erros.push('Descrição');
            break;
          case 'categoriaID':
            this.erros.push('Categoria');
            break;
          case 'GETIN':
            this.erros.push('GETIN');
            break;
          case 'NCM':
            this.erros.push('NCM');
            break;
          case 'marca':
            this.erros.push('Marca');
            break;
          case 'quantidadeMinima':
            this.erros.push('Quantidade Mínima');
            break;
          case 'valorEntrada':
            this.erros.push('Valor de Entrada');
            break;
          case 'valorSaida':
            this.erros.push('Valor de Saída');
            break;
          default:
            break;
        }
      }
    })
  }

}
