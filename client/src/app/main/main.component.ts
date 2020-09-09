import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor(private service: MainService) { }

  ngOnInit(): void {
    const target = document.getElementById('loading')
    const options = {
      loop: true,
      typeColor: '#40f029',
      typeSpeed: 47,
    }
    const writer = new Typewriter(target, options)
    writer.type(' Connecting to server......').rest(5000).removeCursor().start();

    this.fetchResult()
  }

  fetchResult() {
    return this.service.getResult('mike', 'call me now').subscribe(next => {
      console.log(next)
    })
  }

}
