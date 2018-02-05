function bill(arr) {
    let products = [];
    let totalPrice = 0;

    for (let index in arr) {
        index % 2 === 0 ? products.push(arr[index]) : totalPrice += Number(arr[index]);
    }
    console.log(`You purchased ${products.join(", ")} for a total sum of ${totalPrice}`);
}