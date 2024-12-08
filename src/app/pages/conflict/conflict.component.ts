import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { ContainerComponent } from "../../components/container/container.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-conflict',
  imports: [FooterComponent, ContainerComponent, RouterLink],
  templateUrl: './conflict.component.html',
  styleUrl: './conflict.component.css'
})
export class ConflictComponent {

}
