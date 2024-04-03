import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  username: any;
  input: string = '';
  history: string = '';

  constructor() { }

  ngOnInit() {
    this.username = localStorage.getItem('loggedInUser');
  }

  Input(value: string) {
    this.input += value;
  }

  add() {
    this.input += '+';
  }

  subtract() {
    this.input += '-';
  }

  multiply() {
    this.input += '*';
  }

  divide() {
    this.input += '/';
  }

  clear() {
    this.input = '';
    this.history = '';
  }

  calculate() {
    try {
      this.history = this.input;
      this.input = eval(this.input);
    } catch (error) {
      this.input = 'Error';
    }
  }
}
