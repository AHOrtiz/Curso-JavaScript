function fibonacci() {
    var fibonacciArray = [];
    fibonacciArray[0] = 0;
    fibonacciArray[1] = 1;

    for (var i = 2; i <= 100; i++) {
        // 3 - 2 =1 + 3 -1 = 2 =3
        fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1];
    }
    console.log(fibonacciArray);
}

this.fibonacci()