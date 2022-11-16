function TXT () {
    const numbers =[0,1,2,3,4,5,6,7,8,9];
    const Letter = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    const nvv = [];
    for(let i = 0; i<arguments.length; i++){
        nvv[i] = Letter[arguments[i]];

    }
return nvv;
}
console.log(TXT(8,9,4,5,2,1,6))