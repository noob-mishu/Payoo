document.getElementById("addMoney-btn").addEventListener("click", function() {

    // 1. Get the value of the bank name from input field
    const bankName = getValueFromInput("addMoney-BankAccount");

    if(bankName === "Select a Bank")
    {
        alert("Please select a bank");
        return;
    }

    // 2. Get the value of the account number number from input field
    const accountNumber = getValueFromInput("addMoney-BankAccountNumber");
    if(accountNumber.length !== 11)
    {
        alert("Invalid Account Number");
        return;
    }
    console.log(accountNumber);

    // 3. Get the value of the amount from input field
    const amount= getValueFromInput("addMoney-Amount");
    console.log(amount);



    // 4. Add the amount to the user's account balance

        const currentBalance = getBalance();
        const newBalance = currentBalance + parseFloat(amount);
        console.log('New Balance: ', newBalance);

        // 5. check the pin number
        const pinInput= getValueFromInput("addMoney-Pin");
        if(pinInput === "1234")
        {
            alert(`Add Money Successful from ${bankName} at ${new Date().toLocaleTimeString()}`);
            setBalance(newBalance);
        }

        else{
            alert("Invalid Pin. Please try again.");
            return;
        }





    

});