function calc() {
    let firstNum = document.getElementById('num1');
    let secondNum = document.getElementById('num2');

    let result = Number(firstNum.value) + Number(secondNum.value);
    document.getElementById('sum').value = result;
}

function showText() {
    document.getElementById('text').style.display = "inline";
    document.getElementById('more').style.display = "none";
}

function extractText() {
    let nodes = document.querySelectorAll("#items li");
    let result = document.querySelector("#result");
    for (let node of nodes) {
        result.textContent += node.textContent + "\n";
    }
}

function colorize() {
    let data = document.querySelectorAll("tr");
    for (let i = 1; i < data.length; i+=2) {
        data[i].style.backgroundColor = "teal";
    }
}

function countdown(sec) {
    let box = document.getElementById('time');
    setInterval(decrement, 1000);

    function decrement() {
        if (sec === 0){
            return;
        }
        sec--;
        let minutes = Math.trunc(sec / 60);
        let seconds = sec % 60;
        let time = minutes  + ':' + ("0" + (seconds)).slice(-2);
        box.value = time;

    }
}

function extract() {
    let text = document.getElementById('content').textContent;
    let pattern = /\((.+?)\)/gi;
    let result = [];
    let match = pattern.exec(text);

    while (match){
        result.push(match[1]);
        match = pattern.exec(text);
    }

    return result.join('; ');

}

function sum() {
    let tds = document.querySelectorAll('td');
    let sum = 0;
    for (let i = 1; i < tds.length - 2; i+=2) {
        sum += Number(tds[i].textContent);
    }
    document.getElementById('sum').textContent = sum.toString();
}