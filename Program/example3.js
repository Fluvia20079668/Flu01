let eulerlist = () => {
    let a = parseInt(document.getElementById("a1").value);
    let b = parseInt(document.getElementById("b1").value);
    let l = document.getElementById("l").value.split(" ").map(x => parseInt(x));
    let value = listEuler1(a, b, l)

    alert("sum of multiples of a or b in list l is " + value);
}
let listEuler1 = (a, b, l) => {
    let sum = 0;
    for (let num of l) {
        if (num % a === 0 || num % b === 0) {
            sum += num;
        }
    }
    return sum;
}

let euler2Lists = () => {
    let a = document.getElementById("aList").value.split(" ").map(x => parseInt(x));
    let b = document.getElementById("bList").value.split(" ").map(x => parseInt(x));
    let vale = listEuler2(a, b);
}

let listEuler2 = (a, l) => {
    let sum = 0;
    for (let num of l) {
        for (let div of a) {
            if (num % div === 0) {
                sum += num;
                break;
            }
        }
    }
    return sum;
}

let euler2Lists1 = () => {
    let a = document.getElementById('aList').value.split(" ").map(x => parseInt(x));
    let l = document.getElementById('mList').value.split(" ").map(x => parseInt(x));
    let result = listEuler3(a, l);
    alert("Sum of multiples of " + a.join(",") + " in L = " + result);
}

let listEuler3 = (a, l) => {
    let sum = 0;
    for (let num of l) {
        for (let div of a) {
            if (num % div === 0) {
                sum += num;
                break; // avoid double counting
            }
        }
    }
    return sum;
}