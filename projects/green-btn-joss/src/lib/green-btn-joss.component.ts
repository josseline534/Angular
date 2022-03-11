import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gb-joss-green-btn-joss',
  template: ` <input type="button" class="button" value="Mi Boton" /> `,
  styles: [
    `
      .button {
        background: green;
        color: #fff;
        padding: 15px 30px;
      }
    `,
  ],
})
export class GreenBtnJossComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
