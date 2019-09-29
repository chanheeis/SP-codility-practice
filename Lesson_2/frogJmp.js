function frogJmp(X,Y,D){
    const endCond=Math.ceil((Y-X)/D);
    let jump=0;
    while(jump++){
        if(jump>endCond||jump==endCond) break;        
    }
    return jump;
}
frogJmp(1,60,34);
