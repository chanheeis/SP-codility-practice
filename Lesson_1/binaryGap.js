function binaryGap(testValue){
    console.log(`=================`);
    if(!isNaN(testValue)&&testValue>8){
        const binary=testValue.toString(2);
        console.log(binary);

        let temp=0;
        let max=0;

        for(let i=1;i<binary.length;i++){
            if(binary[i]==="0"){
                temp++;
            }else{
                if(binary[i-1]==="0"){
                    max=temp;
                    temp=0;
                }
            }   
        }
        console.log(`Temp : ${temp}`);
        console.log(`Max : ${max}`);
    }else{
        return 0;
    }
}
console.log('Test Start');

binaryGap(100);
binaryGap(1000);
binaryGap(10000);
binaryGap(1231);
binaryGap(567);


