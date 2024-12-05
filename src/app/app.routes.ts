import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CadastroNegadoComponent } from './pages/cadastro-negado/cadastro-negado.component';
import { CadastroEfetuadoComponent } from './pages/cadastro-efetuado/cadastro-efetuado.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: CadastroComponent
    },
    {
        path: 'cadastro-negado',
        component: CadastroNegadoComponent
    },
    {
        path: 'cadastro-efetuado',
        component: CadastroEfetuadoComponent
    }
];
