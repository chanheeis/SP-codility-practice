function maxCounter(num,arr){
    //COND_1 : num,arr.length 은 1~100,000
    //COND_2 : arr의 원소는 1~N+1
    function increase(x){
        counterList[x-1]++;
    }

    function maximize(){
        for(let i=0,max=Math.max(...counterList);i<num;i++){
            if(counterList[i]!==max)
            counterList[i]=max;
        }
    }

    const counterList=[];
    for(let i=0;i<num;i++){
        counterList.push(0);
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i]>=1&&arr[i]<=num){
            increase(arr[i]);
        }else if(arr[i]===num+1){
            maximize();
        }
    }
    return counterList; 
}