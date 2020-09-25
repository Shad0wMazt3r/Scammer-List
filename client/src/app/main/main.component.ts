import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';
import { MainService } from '../services/main.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerResponse } from './response';
import { write } from 'fs';

@Component({
  selector: 'app-header',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  form: FormGroup;
  response: ServerResponse;

  nameText: string;
  messageText: string;

  constructor(private service: MainService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(2)
      ]]
    })
  }

  get name() {
    return this.form.get('name').value
  }

  get message() {
    return this.form.get('message').value
  }

  fetchResult() {
    if (this.form.get('name').errors || this.form.get('message').errors) {
      alert("Please check your input")
    } else {
      const target = document.getElementById('loading')
      const options = {
        typeColor: '#40f029',
        typeSpeed: 47,
      }
      const writer = new Typewriter(target, options)
      writer.type('> Connecting....').rest(1000).removeCursor().start();
      return this.service.getResult(this.name, this.message).subscribe(next => {
        this.response = next
        setTimeout(() => {this.setResponse(this.response)}, 500)
        writer.clear()
        writer.type('> Connected to server').rest(4000).start()
        writer.clear()
      })
    }
  }

  setResponse(response: ServerResponse) {
    // check name and message conditionally
    return null
  }

}