document.getElementById("getBonus-btn").addEventListener("click", function () {

    // 1.Get The Coupon Code from the input field
    const cuponItem = document.getElementById("bonus-cupon");

    
    // 2. Get the current balance of the user
    const currentBalance = getBalance();


    // 3. Check if the coupon code is valid and apply the bonus
    if (cuponItem.value === "PAYOO2026") {
        const newBalance = currentBalance + 100;
        setBalance(newBalance);
        alert("Congratulations! You have received a bonus of 100. Your new balance is " + newBalance);
        

    }

    else{
        alert("Invalid Coupon Code. Please try again.");
        return;
    }
});