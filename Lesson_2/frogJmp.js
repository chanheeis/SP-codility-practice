function frogJmp(X,Y,D){
    const endCond=(Y-X)/D;
    while(jump>=endCond){
        jump++;
    }
    return jump;
}

