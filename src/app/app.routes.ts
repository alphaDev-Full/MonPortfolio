import { Routes } from '@angular/router';
import { Accueil } from './components/accueil/accueil';
import { About } from './components/about/about';
import { Competences } from './components/competences/competences';
import { Educations } from './components/educations/educations';
import { Contact } from './components/contact/contact';
import { Projets } from './components/projets/projets';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home - Alpha Oumar',
    component: Accueil,
  },
  {
    path: 'about',
    title: 'A propos de moi',
    component: About,
  },
  {
    path: 'projets',
    title: 'Mes projets',
    component: Projets,
  },
  {
    path: 'competences',
    title: 'Mes Compentences',
    component: Competences,
  },
  {
    path: 'educations',
    title: 'Educations',
    component: Educations,
  },
  {
    path: 'contact',
    title: 'Contactez-moi',
    component: Contact,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
