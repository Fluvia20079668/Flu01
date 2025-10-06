//write a function to alert if overweight (15kg) baggage

//call it from the page

//alert("Hello");//write a check function here...
//update: the check function should reveal the "removed" text input
//if the baggage is overweight
//and a button to remove some
//the remove function should update the weight
//and let the user know when ok to proceed
// let check = () => {
//     alert('Checking Baggage weight: ' + parseInt(document.getElementById('weight').value));
//     //These should only display if it is actually overweight
//     document.getElementById('removed').style = 'display:block;'
//     document.getElementById('remB').style = 'display:block;'
// }
// let remove = () => alert('Removing weight: ' + parseInt(document.getElementById('removed').value))
const maxValue = 15;
let check = () => {
    const weight = parseInt(document.getElementById('weight').value);

    if (weight > maxValue) {
        alert("Overweight remove some baggage.");
        document.getElementById('removed').style.display = 'block';
        document.getElementById('remB').style.display = 'block';
    } else {
        alert("Weight is Ok");
        document.getElementById('removed').style.display = 'none';
        document.getElementById('remB').style.display = 'none';
    }
}

let remove = () => {
    const removeWeight = parseInt(document.getElementById('removed').value);
    let currentWeight = parseInt(document.getElementById('weight').value);

    const newWeight = currentWeight - removeWeight;
    alert("Updated Weight: " + newWeight + " kg");

    document.getElementById('weight').value = newWeight;
    document.getElementById('removed').style.display = 'none';
    document.getElementById('remB').style.display = 'none';

    if (newWeight <= maxValue) {
        alert("OK");
        document.getElementById('removed').style.display = 'none';
        document.getElementById('remB').style.display = 'none';
    }
}