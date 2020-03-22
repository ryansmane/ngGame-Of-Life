import { Component, Output, EventEmitter } from "@angular/core";
import { FormService } from "../services/form-service.service";

import { Dims } from "../models/dims.model";
@Component({
  selector: "params-form",
  templateUrl: "./params-form.html"
})
export class ParamsForm {
  rows: number;
  cols: number;
  errorText: string;
  buttonStyles = {
        'min-height': '16px',
        'background-color': 'red'
    }

  @Output()
  dimsSet: EventEmitter<Dims> = new EventEmitter<Dims>();

  constructor() {}

  setDims() {
    if (this.rows <= 0 || this.cols <= 0 || !this.rows || !this.cols) {
      this.errorText = "Dimensions must be positive integers.";
    } else {
      this.errorText = '';
      this.dimsSet.emit({
        rows: this.rows,
        cols: this.cols
      });
    }
    console.log(typeof this.rows, typeof this.cols);
  }
}
