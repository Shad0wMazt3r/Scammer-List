import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';
import { MainService } from '../services/main.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

form: FormGroup;

  constructor(private service: MainService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      message: ['', [
        Validators.required
      ]]
    })

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

  get name() {
    return this.form.get('name').value
  }

  get message() {
    return this.form.get('message').value
  }

  fetchResult() {
    return this.service.getResult(this.name, this.message).subscribe(next => {
      console.log(next)
    })
  }

}
