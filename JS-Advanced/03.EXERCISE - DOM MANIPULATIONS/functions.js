function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value;
    let result = firstNum - secondNum;
    document.getElementById('result').textContent = result;
}

function addItem() {
    let newOption = document.createElement('option');
    newOption.textContent = document.getElementById('newItemText').value;
    newOption.value = document.getElementById('newItemValue').value;
    document.getElementById('menu').appendChild(newOption);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}

function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let div = document.getElementById('extra');

    if (button.textContent === "Less") {
        div.style.display = 'none';
        button.textContent = 'More';
    }

    else {
        div.style.display = 'block';
        button.textContent = "Less";
    }

}

function create(array) {
    for (let element of array) {
        let myPara = document.createElement('p');
        let myDiv = document.createElement('div');

        myPara.textContent = element;
        myPara.style.display = 'none';
        myDiv.appendChild(myPara);

        document.getElementById('content').appendChild(myDiv);


        myDiv.addEventListener('click', function (event) {
            event.target.children[0].style.display = 'block';
        });
    }
}

function notify(message) {
    let notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(hideText, 2000);

    function hideText() {
        notification.style.display = 'none';
    }
}

function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', convertDays);
    hoursBtn.addEventListener('click', convertHours);
    minutesBtn.addEventListener('click', convertMinutes);
    secondsBtn.addEventListener('click', convertSeconds);

    function convertDays() {
        let days = document.getElementById('days').value;
        document.getElementById('hours').value = days * 24;
        document.getElementById('minutes').value = days * 1440;
        document.getElementById('seconds').value = days * 86400;
    }

    function convertHours() {
        let hours = document.getElementById('hours').value;
        document.getElementById('days').value = hours / 24;
        document.getElementById('minutes').value = hours * 60;
        document.getElementById('seconds').value = hours * 3600;
    }

    function convertMinutes() {
        let minutes = document.getElementById('minutes').value;
        document.getElementById('days').value = minutes / 1440;
        document.getElementById('hours').value = minutes / 60;
        document.getElementById('seconds').value = minutes * 60;
    }

    function convertSeconds() {
        let seconds = document.getElementById('seconds').value;
        document.getElementById('days').value = seconds / 86400;
        document.getElementById('hours').value = seconds / 3600;
        document.getElementById('minutes').value = seconds / 60;
    }

}