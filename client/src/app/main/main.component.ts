import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-header',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.getElementById('loading')
    const options = {
      loop: true,
      typeColor: '#40f029',
      typeSpeed: 47,
    }
    const writer = new Typewriter(target, options)
    writer.type(' Connecting to server......').rest(5000).removeCursor().start();
  }

}
