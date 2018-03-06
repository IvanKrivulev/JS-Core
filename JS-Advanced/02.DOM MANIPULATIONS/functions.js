function addItem() {
    let newLi = document.createElement('li');
    let list = document.getElementById('items');
    let input = document.getElementById('newItemText');

    if (input.value !== ''){
        newLi.textContent = input.value;
        list.appendChild(newLi);
        input.value = '';
    }

}

function addDelete() {

    let newLi = document.createElement('li');
    let list = document.getElementById('items');
    let input = document.getElementById('newText');

    if (input.value !== ''){
        newLi.textContent = input.value + ' ';

        let anchor = document.createElement('a');
        anchor.href = '#';
        anchor.textContent = '[Delete]';
        anchor.addEventListener('click', deleteItem);
        newLi.appendChild(anchor);

        list.appendChild(newLi);

        input.value = '';
    }
    function deleteItem() {
        newLi.parentNode.removeChild(newLi);
    }
}

function deleteByEmail() {
    let input = document.getElementsByName('email')[0].value;
    let emails = document.querySelectorAll('#customers tr td:last-child');
    let table = document.getElementById('customers');

    for (let email of emails) {
        if (email.textContent === input){
            let row = email.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = "Deleted.";
            input.value = '';
            return;
        }
    }
    input.value = '';
    document.getElementById('result').textContent = "Not found.";
}

function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');

    gradient.addEventListener('mousemove', getPercentage);
    gradient.addEventListener('mouseout', removePercentage);
    //
    function getPercentage(event) {
        let x = event.offsetX;
        let percentage = Math.trunc((x / this.clientWidth) * 100);
        result.textContent = percentage.toString() + '%';
    }

    function removePercentage() {
        result.textContent = '';
    }
}

function focus() {
    let inputs = document.getElementsByTagName('input');

    for (let input of inputs) {
        input.addEventListener('focus', function (event) {
            event.target.parentNode.className = 'focused';
        });
        input.addEventListener('blur', function (event) {
            event.target.parentNode.removeAttribute('class');
        })
    }
}

function validate() {
    let pattern = /^[a-z]+@[a-z]+.[a-z]+$/g;
    let input = document.getElementById('email');

    input.addEventListener('change', onChange);

    function onChange() {
        if (pattern.test(input.value)){
            input.removeAttribute('class');
        }else {
            input.className = 'error';
        }
    }
}