function factorsAndMultiples1() 
{
    let input = document.getElementById("inputData1").value.trim();

    try {
        // Split input into divisors and list
        let parts = input.split(":");
        if (parts.length !== 2) throw "Invalid format";

        // Convert divisors using parse(), will throw if invalid
        let rawFilters = parts[0].trim().split(" ");
        let filters = rawFilters.map(f => parse(f));

        // Convert list numbers using parse(), will throw if invalid
        let rawList = parts[1].trim().split(" ");
        let list = rawList.map(n => parse(n));

        // Calculate sum
        let sum = 0;
        for (let num of list) {
            for (let f of filters) {
                if (num % f === 0) {
                    sum += num;
                    break;
                }
            }
        }

        document.getElementById("output1").innerText = sum + " : " + input;

    } catch (err) {
        // If any parse fails → corrupt
        document.getElementById("output1").innerText = "corrupt : " + input;
    }
}