import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  private _title: string;

  constructor() {
    this._title='Örder';
  }

  get title(){
    return this._title;
  }
}
