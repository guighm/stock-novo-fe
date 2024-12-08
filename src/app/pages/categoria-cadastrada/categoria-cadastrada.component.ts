import { Component } from '@angular/core';
import { ContainerComponent } from "../../components/container/container.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categoria-cadastrada',
  imports: [ContainerComponent, FooterComponent, RouterLink],
  templateUrl: './categoria-cadastrada.component.html',
  styleUrl: './categoria-cadastrada.component.css'
})
export class CategoriaCadastradaComponent {

}
