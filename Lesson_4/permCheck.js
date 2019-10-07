function solution(arr){
    if(arr.length==1){
        if(arr[0]===1) return 1;
        return 0;
    }
    arr.sort();
    if(arr[0]!==1 || arr[length-1]>100000) return 0;
    for(let index=0;index<arr.length;index++){
        if(arr[index]!==index+1) return 0;
        // console.log(index,value, arr[index]);
    }
    return 1;
}

