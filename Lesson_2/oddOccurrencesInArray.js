function oddOccurrencesInArray(arr){
    arr.sort();
    let temp=arr.shift();
    let isOdd=true;

    while(1){
        let top=arr.shift();
        if(top===temp){
            isOdd=!isOdd;
        }else{
            if(isOdd) return temp;
            temp=top;
            isOdd=!isOdd;
        }
    }
}

arr_1=[1,2,2,3,3,5,5]; //1
arr_2=[2,2,1,3,1,4,5,4,5]; //3
arr_3=[3,3,9,5,7,3,3,9,5,8,7]; //8

console.log(oddOccurrencesInArray(arr_1));
console.log(oddOccurrencesInArray(arr_2));
console.log(oddOccurrencesInArray(arr_3));