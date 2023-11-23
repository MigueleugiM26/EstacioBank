import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'area-pix',
    loadChildren: () => import('./area-pix/area-pix.module').then( m => m.AreaPixPageModule)
  },
  {
    path: 'cobrar',
    loadChildren: () => import('./cobrar/cobrar.module').then( m => m.CobrarPageModule)
  },
  {
    path: 'depositar',
    loadChildren: () => import('./depositar/depositar.module').then( m => m.DepositarPageModule)
  },
  {
    path: 'funcionalidades-escondidas',
    loadChildren: () => import('./funcionalidades-escondidas/funcionalidades-escondidas.module').then( m => m.FuncionalidadesEscondidasPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'historico-escondido',
    loadChildren: () => import('./historico-escondido/historico-escondido.module').then( m => m.HistoricoEscondidoPageModule)
  },
  {
    path: 'investir',
    loadChildren: () => import('./investir/investir.module').then( m => m.InvestirPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'menu-principal-escondido',
    loadChildren: () => import('./menu-principal-escondido/menu-principal-escondido.module').then( m => m.MenuPrincipalEscondidoPageModule)
  },
  {
    path: 'pagar',
    loadChildren: () => import('./pagar/pagar.module').then( m => m.PagarPageModule)
  },
  {
    path: 'perguntas-frequentes',
    loadChildren: () => import('./perguntas-frequentes/perguntas-frequentes.module').then( m => m.PerguntasFrequentesPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'transferir',
    loadChildren: () => import('./transferir/transferir.module').then( m => m.TransferirPageModule)
  },
  {
    path: 'perguntas-frequentes-area-pix',
    loadChildren: () => import('./perguntas-frequentes-area-pix/perguntas-frequentes-area-pix.module').then( m => m.PerguntasFrequentesAreaPixPageModule)
  },
  {
    path: 'perguntas-frequentes-cobrar',
    loadChildren: () => import('./perguntas-frequentes-cobrar/perguntas-frequentes-cobrar.module').then( m => m.PerguntasFrequentesCobrarPageModule)
  },
  {
    path: 'perguntas-frequentes-deposito',
    loadChildren: () => import('./perguntas-frequentes-deposito/perguntas-frequentes-deposito.module').then( m => m.PerguntasFrequentesDepositoPageModule)
  },
  {
    path: 'perguntas-frequentes-investir',
    loadChildren: () => import('./perguntas-frequentes-investir/perguntas-frequentes-investir.module').then( m => m.PerguntasFrequentesInvestirPageModule)
  },
  {
    path: 'perguntas-frequentes-pagar',
    loadChildren: () => import('./perguntas-frequentes-pagar/perguntas-frequentes-pagar.module').then( m => m.PerguntasFrequentesPagarPageModule)
  },
  {
    path: 'transferir-pix',
    loadChildren: () => import('./transferir-pix/transferir-pix.module').then( m => m.TransferirPixPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
