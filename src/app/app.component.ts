import { Component, ComponentFactoryResolver } from '@angular/core';
import { Dims } from './models/dims.model';
import { ConwayService } from './services/conway-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngGOL';
  gridArray: any[][];
  rows: number;
  cols: number;
  intervalID;
  inputContainerStyles: Object = {
    'text-align': 'center',
    'padding': '24px 0px',
    'border-bottom': '2px solid black'
  }

  constructor(private conwayMethods: ConwayService) {}

  getDims(obj:Dims): void {
    this.rows = Number(obj.rows);
    this.cols = Number(obj.cols);
    const rows = Number(obj.rows);
    const cols = Number(obj.cols);
    const blankRows = [...Array(rows)].map((row, i) => [i])
    this.gridArray = blankRows.map((r, i) => [...Array(cols)].map((v, i) => {return {value: 0, row: r[0], col: i }}))
   
  }

  changeSingleValue(obj: object) {
    const row = obj['row'];
    const col = obj['col'];
    this.gridArray[row][col].value = this.gridArray[row][col].value === 1 ? 0 : 1;
  }

  generate() {
    this.intervalID = setInterval(() => 
    this.gridArray = this.conwayMethods.generate(this.gridArray, this.rows, this.cols), 250)
  }

  stopGenerate() {
    clearInterval(this.intervalID)
  }


}
