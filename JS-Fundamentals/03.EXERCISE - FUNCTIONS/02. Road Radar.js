function radar([currentSpeed, area]) {
    //let [currentSpeed, area] = arr;
    function getLimit(zone) {
        switch (zone){
            case "motorway": return 130;
            case "interstate": return 90;
            case "city": return 50;
            case "residential": return 20;
        }
    }
    let speedLimit = getLimit(area);
    let overSpeed = currentSpeed - speedLimit;

    if (overSpeed>0 && overSpeed<=20) return "speeding";
    else if (overSpeed>20 && overSpeed<=40) return "excessive speeding";
    else if (overSpeed>40) return "reckless driving";
    else return "";
}
