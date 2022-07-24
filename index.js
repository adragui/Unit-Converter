/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputNum = document.getElementById("input_number")
const convertBtn = document.getElementById("convertBtn")
const resultContainer = document.getElementById("results-container")
const inputContainer = document.getElementById("input-container")

convertBtn.addEventListener("click", function() {
    if (inputNum.value > 0) {
        resultContainer.style.display = "flex";
        inputContainer.style.borderRadius = "5px 5px 0px 0px";
        let feet = (inputNum.value * 3.281).toFixed(3)
        let meters = (inputNum.value / 3.281).toFixed(3)
        let gallons = (inputNum.value * 0.264).toFixed(3)
        let liters = (inputNum.value / 0.264).toFixed(3)
        let pounds = (inputNum.value * 2.204).toFixed(3)
        let kilos = (inputNum.value / 2.204).toFixed(3)
        resultContainer.innerHTML = `
                <div class="show-result">
                    <h3>Length (Meter/Feet)</h3>
                    <p id="results">${inputNum.value} meters = ${feet} feet | ${inputNum.value} feet = ${meters} meters</p>
                </div>
                
                <div class="show-result">
                    <h3>Volume (Liters/Gallons)</h3>
                    <p id="results">${inputNum.value} liters = ${gallons} gallons | ${inputNum.value} gallons = ${liters} liters</p>
                </div>
                
                <div class="show-result">
                    <h3>Mass (Kilograms/Pounds)</h3>
                    <p id="results">${inputNum.value} kilos = ${pounds} pounds | ${inputNum.value} pounds = ${kilos} kilos</p>
                </div>
        `
    } else {
        console.log("Insert a valid number")
    }
        
})