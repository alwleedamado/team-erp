import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fluent-angular';
  public form: FormGroup;
  exampleTextField = '';
  constructor() {
    this.form = new FormGroup({
      name: new FormControl(''),
    });
  }
  onClick() {
    console.log(this.exampleTextField);
  }
}
