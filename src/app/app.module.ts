import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { App } from 'test/app';
import { CapitalisePipe } from 'test/capitalisePipe';
import { Counter } from '../test/counter';
import { Greeter } from 'test/greeter';
import { logClicks } from 'test/logClicksDirective';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    App,
    CapitalisePipe,
    Counter,
    Greeter,
    logClicks,
    HomeComponent 
  ],
  imports: [
    BrowserModule,
    BrowserModule, RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
