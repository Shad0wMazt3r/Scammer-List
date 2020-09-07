import { Component, OnInit } from '@angular/core';
// import Typewriter from 't-writer.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  text = '.';
  ngOnInit() {
  //   const target = document.getElementById('lol')
  //   const options = {
  //     loop: true,
  //   }
  //   const writer = new Typewriter(target, options)

  //   writer.type(this.text).rest(12).start();
  //   writer.removeCursor()
  }

}
