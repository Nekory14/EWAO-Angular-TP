import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  firstNumber: number = 0;
  secondNumber: number = 0;
  selectedOperation: string = "addition";
  result: number = 0;

  history: HistoricalOperation[] = [];

  calculate(): void {
    switch (this.selectedOperation){
      case "addition" :
        this.result = this.firstNumber + this.secondNumber;
        break;
      case "subtraction" :
        this.result = this.firstNumber - this.secondNumber;
        break;
      case "multiplication" :
        this.result = this.firstNumber * this.secondNumber;
        break;
      case "division" :
        this.result = this.firstNumber / this.secondNumber;
        break;
      default:
        this.result = 0;
        break;
    }

    const currentTime = new Date().toLocaleTimeString();
    const historicalOperation = new HistoricalOperation(currentTime, this.selectedOperation, this.result);
    this.history.push(historicalOperation);
  }

  removeFromHistory(operation: HistoricalOperation): void {
    const index = this.history.indexOf(operation);
    if (index !== -1) {
      this.history.splice(index, 1);
    }
  }
}

export class HistoricalOperation {
  time: string;
  operation: string;
  result: number;

  constructor(time: string, operation: string, result: number) {
    this.time = time;
    this.operation = operation;
    this.result = result;
  }
}

