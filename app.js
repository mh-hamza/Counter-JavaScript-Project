                //Select Variables
        const displayValue = document.querySelector(".displayValue")
        const decrement = document.querySelector(".decrement")
        const reset = document.querySelector(".reset")
        const increment = document.querySelector(".increment")

        let counterValue = 0;
        function updateCounter() {
            displayValue.innerText = counterValue;
        }

        decrement.addEventListener("click", function () {
            displayValue.innerText = counterValue--
            updateCounter()
        })
        reset.addEventListener("click", function () {
            displayValue.innerText = counterValue = 0
            updateCounter()
        })
        increment.addEventListener("click", function () {
            displayValue.innerText = counterValue++
            updateCounter()
        })