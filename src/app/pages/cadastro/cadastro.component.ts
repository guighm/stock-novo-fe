import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-cadastro',
  imports: [FormComponent, FooterComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

}
