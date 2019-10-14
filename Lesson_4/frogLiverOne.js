function solution(max,arr){
    const cond_1=(1>arr.length)||(100000<arr.length);
    const cond_2=(1>max)||(100000<max);
    if(cond_1 || cond_2) return -1;

    const isPermArr=[];
    for(let i=0;i<max;i++){
        isPermArr.push(false);
    }

    for(let i=0;i<max;i++){
        if(arr[i]<1 || arr[i]>max) return -1;
        if(isPermArr[arr[i]-1]===false) isPermArr[arr[i]-1]=true; 
        if(!isPermArr.includes(false)) return i;
    }
}
