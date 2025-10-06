//redefine these - ex1 should output the solution to project Euler Q1
//https://projecteuler.net/problem=1
//ex2 should output the sum of all multiples of a or b less than n

let euler1 = () => {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    alert("Sum of multiples of 3 or 5 below 1000 is: " + sum);
}


let eulerCustom = () => {
    let value1 = parseInt(document.getElementById("a").value);
    let value2 = parseInt(document.getElementById("b").value);
    let limit = parseInt(document.getElementById("n").value);
    let sum = 0;
    for (let i = 1; i < limit; i++) {
        if (i % value1 === 0 || i % value2 === 0) {
            sum += i;
        }
    }
    alert(`Sum  is: ${sum}`);
}