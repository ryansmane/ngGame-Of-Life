import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector:'conways-grid',
    templateUrl: './conways-grid.html',
})
export class ConwaysGrid implements OnInit{
    @Input() gridArray: any[] = new Array(1);
    gridAndButton = {
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'space-between',
        'margin': '0 auto'
    }  
    divStyles = {
        'border': '1px solid black',
        'min-width': '25px',
        'min-height': '25px'
    }
    rowsStyle = {
        'display': 'flex',
        'justify-content': 'center',
        'border-left':'1px solid black',
        'border-right': '1px solid black'
    }
    colContStyles= {
        'display':'flex',
        'flex-direction': 'row'
    }
   @Output() seed: EventEmitter<object> = new EventEmitter;
   @Output() generate: EventEmitter<any> = new EventEmitter;
   @Output() stopGenerate: EventEmitter<any> = new EventEmitter;
    clicked = false;
    coordinates: object;
    constructor() {}

    ngOnInit() {
        
    }

    changeValue(x, y) {
        this.seed.emit({row: x, col: y});
    }

    getGeneration() {
        this.clicked = !this.clicked
        this.generate.emit();
    }
    stopGeneration() {
        this.clicked = !this.clicked
        this.stopGenerate.emit();
    }

    
    
}