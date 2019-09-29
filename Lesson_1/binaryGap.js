function binaryGap(testValue){
    if(!isNaN(testValue)&&testValue>8){

        const binary=testValue.toString(2);
        let temp=0;
        let max=0;

        for(let i=1;i<binary.length;i++){
            if(binary[i]==="0"){
                temp++;
                if(i<binary.length-1 && binary[i+1]==="1"){
                    if(max<temp){
                        max=temp;
                    }
                    temp=0;
                }
            }   
        }
        return max;
    }else{
        return 0;
    }
}



