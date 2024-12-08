import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CategoriaProduto } from '../interfaces/categoria';
import { CategoriaCadastrada } from '../interfaces/categoria-cadastrada';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly http = inject(HttpClient);
  API_URL = "http://localhost:3000/categoria";

  cadastrarCategoria(categoria: CategoriaProduto) {
    const url = this.API_URL + "/cadastro";
    return this.http.post<CategoriaProduto>(url, categoria, {observe: 'response'});
}

  listarCategorias() {
    const url = this.API_URL + "/lista";
    return this.http.get<CategoriaCadastrada[]>(url, {observe: 'response'});
}
}
