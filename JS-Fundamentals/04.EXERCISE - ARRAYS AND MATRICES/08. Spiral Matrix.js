function spiral(x, y) {
    let matrix = [];

    for (let i = 0; i < x; i++) {
        matrix.push([]);
    }

    let startRow = 0;
    let startCol = 0;
    let endRow = x - 1;
    let endCol = y - 1;
    let num = 1;

    while (startRow <= endRow || startCol <= endCol){
        for (let right = startCol; right <= endCol; right++) {
            matrix[startRow][right] = num++;
        }

        for (let down = startRow + 1; down <= endRow; down++) {
            matrix[down][endCol] = num++;
        }

        for (let left = endCol - 1 ; left >= startCol; left--) {
            matrix[endRow][left] = num++;
        }

        for (let up = endRow - 1 ; up > startRow; up--) {
            matrix[up][startCol] = num++;
        }

        startCol++;
        startRow++;
        endRow--;
        endCol--;
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'));

}

spiral(5, 5);