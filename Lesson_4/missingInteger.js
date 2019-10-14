function missingInteger(arr){
    let max=Math.max(...arr);
    if(max<0) max=1;

    const boolArr=[];
    for(let i=0;i<max;i++){
        boolArr.push(false);
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            boolArr[arr[i]-1]=true;
        }
    }

    for(let i=0;i<boolArr.length;i++){
        if(boolArr[i]===false) return i+1;
    }
    return max+1;
}

const arr_1=[1,3,6,4,1,2,];
const arr_2=[-1,-3];
const arr_3=[1,2,3];

let min=missingInteger(arr_1);
console.log(min);
min=missingInteger(arr_2);
console.log(min);
min=missingInteger(arr_3);
console.log(min);