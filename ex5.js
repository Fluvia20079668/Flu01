function factorsAndMultiples1() {
    let input = document.getElementById("inputData1").value.trim();

    try {
        let parts = input.split(":");
        if (parts.length !== 2) throw "Invalid format. Use 'a b : list'.";

        // Split and check divisors
        let rawFilters = parts[0].trim().split(" ");
        let filters = rawFilters.map(f => {
            if (isNaN(f) || f === "") throw "Error: '" + f + "' is not a number in divisors.";
            return Number(f);
        });

        // Split and check list numbers
        let rawList = parts[1].trim().split(" ");
        let list = rawList.map(n => {
            if (isNaN(n) || n === "") throw "Error: '" + n + "' is not a number in list.";
            return Number(n);
        });

        // Calculate sum
        let sum = 0;
        for (let num of list) {
            for (let f of filters) {
                if (num % f === 0) {
                    sum += num;
                    break; // avoid double-counting
                }
            }
        }

        document.getElementById("output1").innerText = sum + " : " + input;

    } catch (err) {
        // Show error message in output
        document.getElementById("output1").innerText = err;
    }
}
