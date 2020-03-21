import { Component, Output, EventEmitter } from '@angular/core';
import { FormService} from '../services/form-service.service'

import {Dims} from '../models/dims.model'
@Component({
    selector: 'params-form',
    templateUrl: './params-form.html'
})
export class ParamsForm {
    rows: number;
    cols: number;

    @Output() 
    dimsSet: EventEmitter<Dims> = new EventEmitter<Dims>();

    constructor() {

    }

    setDims() {
        
        this.dimsSet.emit(
            {
                rows: this.rows,
                cols: this.cols
            })
    }
}