import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CadastroNegadoComponent } from './pages/cadastro-negado/cadastro-negado.component';
import { CadastroEfetuadoComponent } from './pages/cadastro-efetuado/cadastro-efetuado.component';
import { CadastroCategoriaComponent } from './pages/cadastro-categoria/cadastro-categoria.component';
import { CategoriaCadastradaComponent } from './pages/categoria-cadastrada/categoria-cadastrada.component';
import { ConflictComponent } from './pages/conflict/conflict.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/cadastrar-produto',
        pathMatch: 'full'
    },
    {
        path: 'cadastrar-produto',
        component: CadastroComponent
    },
    {
        path: 'cadastro-negado',
        component: CadastroNegadoComponent
    },
    {
        path: 'cadastro-efetuado',
        component: CadastroEfetuadoComponent
    },
    {
        path: 'cadastrar-categoria',
        component: CadastroCategoriaComponent
    },
    {
        path: 'categoria-cadastrada',
        component: CategoriaCadastradaComponent
    },
    {
        path: 'conflict',
        component: ConflictComponent
    }
];