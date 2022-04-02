function numberCheck () {
    let number = +prompt("Enter your number:");
    function isEven (number) {
        if (number % 2 === 0) {
            return "even";
        } else {
            return "odd";
        }
    }

    function isPrime (number) {
        for (i = 2; i < number; i++) {
            if (number % i === 0) {
                return "composite";
            }
        }
        
        return "prime";
    }

    alert(`Entered number is ${number}. This is ${isEven(number)} and ${isPrime(number)} number!`);
}