function factorsAndMultiples() 
{
    let input = document.getElementById("inputData").value.trim();

    let parts = input.split(":");
    if (parts.length !== 2) {
        document.getElementById("output").innerText = " Invalid format. Use 'a b : list'.";
        return;
    }

    let ab = parts[0].trim().split(" ").map(Number);
    let list = parts[1].trim().split(" ").map(Number);

    let a = ab[0];
    let b = ab[1];
    let sum = 0;

    for (let num of list) {
        if (num % a === 0 || num % b === 0) {
            sum += num;
        }
    }

    document.getElementById("output").innerText =
        sum + " : " + input;
}
