function solve(arr) {
    let data = [];
    for (let line of arr) {
        let myHero = {};
        let [hero, level, items] = line.split(/\s\/\s?/g);
        if (items === undefined){
            myHero = {
                name: hero,
                level: Number(level),
                items: []
            }
        }else{
            myHero = {
                name: hero,
                level: Number(level),
                items: items.split(', ')
            };
        }

        data.push(myHero);
    }
    console.log(JSON.stringify(data));
}