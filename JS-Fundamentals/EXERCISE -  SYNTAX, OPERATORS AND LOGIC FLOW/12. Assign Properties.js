function assign(arr) {
    let [key1, value1, key2, value2, key3, value3] = arr;
    let obj = {};
    obj[key1] = value1;
    obj[key2] = value2;
    obj[key3] = value3;

    return obj;
}

assign(['ssid', '90127461', 'status', 'admin', 'expires', '600']);