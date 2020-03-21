import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class FormService {
    rows: number;
    cols: number;

    constructor() {}
    
    setDimensions(rows, cols) {
        this.rows = rows;
        this.cols = cols;
    }




}