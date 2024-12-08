import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly http = inject(HttpClient);
  API_URL = "http://localhost:3000/produto/cadastro";

  cadastrarProduto(produto: Produto) {
    return this.http.post<Produto>(this.API_URL, produto, {observe: 'response'});
  }
}
