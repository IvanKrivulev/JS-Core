function oddOrEven(num) {
    if (num % 2 === 0){
        console.log("even");
    }
    else if (num !== Math.round(num)){
        console.log("invalid");
    }
    else{
        console.log("odd");
    }
}