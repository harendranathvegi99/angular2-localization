import { Component } from '@angular/core';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor() {
    // Do something with api
  }

  changeLocale (locale) {
    localStorage.setItem('locale', locale);
    location.reload();
  }
}
