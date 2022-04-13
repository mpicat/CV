import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormationComponent } from './formation/formation.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PasseTempsComponent } from './passe-temps/passe-temps.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'competences', component: CompetencesComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'passe-temps', component: PasseTempsComponent},
  { path: 'experiences', component: ExperiencesComponent},
  { path: 'formation', component: FormationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
