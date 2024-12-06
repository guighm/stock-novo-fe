import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { ContainerComponent } from "../../components/container/container.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-efetuado',
  imports: [FooterComponent, ContainerComponent, RouterLink],
  templateUrl: './cadastro-efetuado.component.html',
  styleUrl: './cadastro-efetuado.component.css'
})
export class CadastroEfetuadoComponent {

}
