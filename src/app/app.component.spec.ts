import { AppComponent } from './app.component';
import {TestBed, async, fakeAsync, tick, inject} from '@angular/core/testing';
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Router, RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { Location, APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];
describe('Router tests', () => {
  let router;
  //setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
      ],
      declarations: [ AppComponent,HomeComponent ],
      providers:[{provide: APP_BASE_HREF, useValue : '/' }]
    });
  });
  beforeEach(inject([Router], _router => {
    router = _router;
  }));
  
  it('default route redirects to home (fakeAsync/tick)', fakeAsync(() => {
    let fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation(); // triggers default
    fixture.detectChanges();
    //execute all pending asynchronous calls
    tick();
    expect(location.pathname.endsWith('/home')).toBe(true);
  }));
  it('can navigate to home (fakeAsync/tick)', fakeAsync(() => {
    let fixture = TestBed.createComponent(AppComponent);
    router.navigate(['/home']);
    fixture.detectChanges();
    //execute all pending asynchronous calls
    tick();    
    expect(location.pathname.endsWith('/home')).toBe(true);
  }));
  it('should redirect unexisting urls to Home (fakeAsync/tick)', fakeAsync(() => {
    let fixture = TestBed.createComponent(AppComponent);
    router.navigate(['/undefined/route']);
    fixture.detectChanges();
    //execute all pending asynchronous calls
    tick();     
    expect(location.pathname.endsWith('/home')).toBe(true);
  })); 
});
