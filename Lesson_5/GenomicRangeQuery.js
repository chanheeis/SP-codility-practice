function genomicRangeQuery(str,arr_start,arr_end){
    const genomValue={A:1,C:2,G:3,T:4};
    const resultArr=arr_start.map((start,index)=>{
        const end=arr_end[index]+1;
        const substr=str.substring(start,end);
        let min=5;
        for(let i=0,len=substr.length;i<len;i++){
            if(genomValue[substr[i]]<min) min=genomValue[substr[i]];
        }
        return min;   
    })
    console.log(resultArr);
    return resultArr;
}
const arr_start=[2,5,0]
const arr_end=[4,5,6];
genomicRangeQuery("CAGCCTA",arr_start,arr_end);