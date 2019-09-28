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

console.log(binaryGap(567));
console.log(binaryGap(1021));
console.log(binaryGap(1024));
console.log(binaryGap(98));
console.log(binaryGap(432));
console.log(binaryGap(10));
console.log(binaryGap(1));


