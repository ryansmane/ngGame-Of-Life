import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ConwayService {

  generate(arr, rows, cols) {
    
    let copy = arr.slice();
    const padding = [...Array(cols)].fill({value: 0})
    
    // padding
    // copy.unshift(padding);
    // copy.push(padding);
    
    let staticGrid = copy.map(x => x.map(y => {return {...y, value: 0} }));
    
    for (let i = 1; i < rows - 1; i++) {
      for (let k = 0; k < cols; k++) {
        if (copy[i][k].value === 1) {
          if (this.neighborSum(copy, i, k) > 3) {
            staticGrid[i][k].value = 0;
          } else if (this.neighborSum(copy, i, k) < 2) {
            staticGrid[i][k].value = 0;
          } else {
            staticGrid[i][k].value = 1;
          }
        }
        if (copy[i][k].value === 0 && this.neighborSum(copy, i, k) === 3) {
          staticGrid[i][k].value = 1;
        }
      }
    }

    // staticGrid.pop();
    // staticGrid.shift();

    return staticGrid;
  }

  neighborSum(arr, i, j) {
    let sum = 0;
    sum += arr[i][j + 1] ? arr[i][j + 1].value : 0;
    sum += arr[i][j - 1] ? arr[i][j - 1].value : 0;
    sum += arr[i + 1][j] ? arr[i + 1][j].value : 0;
    sum += arr[i - 1][j] ? arr[i - 1][j].value : 0;
    sum += arr[i + 1][j + 1] ? arr[i + 1][j + 1].value : 0;
    sum += arr[i - 1][j - 1] ? arr[i - 1][j - 1].value : 0;
    sum += arr[i - 1][j + 1] ? arr[i - 1][j + 1].value : 0;
    sum += arr[i + 1][j - 1] ? arr[i + 1][j - 1].value : 0;
    return sum;
  }
}
