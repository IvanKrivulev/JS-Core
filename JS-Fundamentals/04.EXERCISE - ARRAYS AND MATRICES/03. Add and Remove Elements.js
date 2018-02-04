function addAndRemove(arr) {
    let seq = [];
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "add"){
            seq.push(count)
        }else if (arr[i] === "remove"){
            seq.pop();
        }
        count++;
    }

    if (seq.length === 0){
        console.log("Empty");
    }else{
        console.log(seq.join("\n"));
    }
}