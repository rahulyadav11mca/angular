import {Component, Input} from '@angular/core';

@Component({
  selector: 'greeter',
  template: `<h1>Hello {{name}}!</h1>`
})
export class Greeter { 
  @Input() name;
}