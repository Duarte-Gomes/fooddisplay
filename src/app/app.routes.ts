import { Routes } from '@angular/router';
import { ChineseComponent } from './chinese-component/chinese-component';
import { PortugueseComponent } from './portuguese-component/portuguese-component';
import { HomeComponent } from './home-component/home-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'comidachinesa',
    component: ChineseComponent,
  },
  {
    path: 'comidaportuguesa',
    component: PortugueseComponent,
  },
];
