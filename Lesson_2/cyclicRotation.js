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
        console.log(`Arr : ${arr}`);
        console.log(`TempArr : ${tempArr}`);
        num--;
        cnt++;
    }
    return frontArr.concat(backArr);
}
const arr=[1,2,3,4,5];
console.log(cyclicRotation(arr,8));
