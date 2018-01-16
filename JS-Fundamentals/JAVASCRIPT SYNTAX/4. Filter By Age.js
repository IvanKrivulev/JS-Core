function filter(minAge, name1, age1, name2, age2) {
    let firstPerson = {name: name1, age: age1};
    let secondPerson = {name: name2, age: age2};
    if (age1 >= minAge){
        console.log(firstPerson);
    }
    if (age2 >= minAge){
        console.log(secondPerson);
    }
}