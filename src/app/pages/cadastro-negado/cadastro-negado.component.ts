import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { ContainerComponent } from "../../components/container/container.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-negado',
  imports: [
    FooterComponent, 
    ContainerComponent, 
    RouterLink
  ],
  templateUrl: './cadastro-negado.component.html',
  styleUrl: './cadastro-negado.component.css'
})
export class CadastroNegadoComponent implements OnInit {

  erros !: string[];

  ngOnInit(): void {
    this.erros = JSON.parse(localStorage.getItem("erros")!);
  }


}
