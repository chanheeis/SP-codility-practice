function tapeEquilibrium(arr){
    if(arr.length==2) return Math.abs(arr[0]-arr[1]);
}

const testArr=[3,1];
const result=tapeEquilibrium(testArr);
console.log(result);