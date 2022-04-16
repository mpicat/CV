import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CompetencesComponent } from './competences/competences.component';
import { PasseTempsComponent } from './passe-temps/passe-temps.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormationComponent } from './formation/formation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
 
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CompetencesComponent,
    PasseTempsComponent,
    ExperiencesComponent,
    PortfolioComponent,
    FormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
