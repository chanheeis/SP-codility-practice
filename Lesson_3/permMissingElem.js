function permMissingElem(arr){
    if(arr.length===1){
        const result=arr[0]===1?2:1;
        return result;
    }
    arr.sort();
    if(arr[0]!==1) return 1;
    for(let index=1,len=arr.length;index<len;index++){
        if(index===arr[index]-1) continue;
        return index+1;
    }
    return arr.length+1;
}