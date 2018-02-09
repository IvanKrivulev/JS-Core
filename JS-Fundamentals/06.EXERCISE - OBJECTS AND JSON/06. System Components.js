function solve(arr) {
    let myMap = new Map();
    for (let line of arr) {
        let [system, component, subComponent] = line.split(" | ");
        if(!myMap.has(system)){
            myMap.set(system, new Map());
        }
        if(!myMap.get(system).has(component)){
            myMap.get(system).set(component, []);
        }
        myMap.get(system).get(component).push(subComponent);
    }
    myMap = [...myMap].sort((a, b) => {
        if (a[1].size > b[1].size) return -1;
        if (a[1].size < b[1].size) return 1;
        if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
        if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
    });
    for (let [system, components] of myMap) {
        console.log(system);

        components = [...components].sort((a, b) => {
            if (a[1].length > b[1].length) return -1;
            if (a[1].length < b[1].length) return 1;
        });
        for (let [comp, sub] of components) {
            console.log(`|||${comp}`);
            for (let s of sub) {
                console.log(`||||||${s}`);
            }
        }
    }
}
solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);