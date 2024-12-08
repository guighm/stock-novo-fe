import { Component } from '@angular/core';
import { FormCategoriaComponent } from "../../components/form-categoria/form-categoria.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-cadastro-categoria',
  imports: [FormCategoriaComponent, FooterComponent],
  templateUrl: './cadastro-categoria.component.html',
  styleUrl: './cadastro-categoria.component.css'
})
export class CadastroCategoriaComponent {

}
