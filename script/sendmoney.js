document.getElementById("sendMoney-btn").addEventListener("click", function(){


    // 1. Get The User Mobile Number

    const mobileNumber = getValueFromInput("sendMoney-Number");
    if(mobileNumber.length!==11)
    {
        alert("Invalid Mobile Number");
        return;
    }

    // 2. Get The Amount
    const amount= getValueFromInput("sendMoney-Amount");

    // 3. Get The Current Balance
    const currentBalance = getBalance();

    // 4. Check if the balance is sufficient
    if(amount>currentBalance)
    {
        alert("Insufficient Balance");
        return;
    }

    // 5. Calculate the new balance
    const newBalance = currentBalance - amount;

    // 6. Check pin is correct or not
    const pin= getValueFromInput("sendMoney-Pin");
    if(pin==="4567")
    {
        alert("Money Sent Successfully to "+mobileNumber);
        setBalance(newBalance);
    }

    else{
        alert("Incorrect Pin");
        return;
    }
    

});