function solve(n, k) {

    let seq = [1];

    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let sum = 0;

        for (let i = start; i < current; i++) {
            sum += seq[i];
        }

        seq[current] = sum;
    }

    console.log(seq.join(' '));
}







