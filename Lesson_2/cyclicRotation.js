function cyclicRotation(arr,num){
    const tempArr=[];
    let frontArr=tempArr,backArr=arr;
    let cnt=0, cycle=arr.length;
    while(num>0){
        if(cnt%cycle===0){
            frontArr=(arr.length===0 && tempArr.length===cycle)?arr:tempArr;
            backArr=(arr.length===cycle && tempArr.length===0)?arr:tempArr;
        }
        frontArr.unshift(backArr.pop());
        num--;
        cnt++;
    }
    return frontArr.concat(backArr);
}
