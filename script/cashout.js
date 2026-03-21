document.getElementById("cashOut-btn").addEventListener("click", function () {
    // // 1. Get the value of the mobile number from input field
    const agentNumber = getValueFromInput("cashOut-Number");
    console.log(agentNumber);

    if(agentNumber.length !== 11 || !agentNumber.startsWith("01"))
    {
        alert("Invalid Agent Number");
        return;
    }

    // 2. Get the value of the amount from input field
    const cashOutAmount = getValueFromInput("cashOut-Amount");
    console.log(cashOutAmount);

    // 3. Get the amount of money in the user's account 

    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);

    // 4. calculate the new balance after cashing out

    const newBalance = parseFloat(balance) - parseFloat(cashOutAmount);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }

    // 5. check the pin number

    const pinInput= getValueFromInput("cashOut-Pin");
    console.log(pinInput);

    if(pinInput === "1234")
    {
        alert("Cash Out successful!");
        console.log('New Balance: ', newBalance);
        balanceElement.innerText = newBalance;

        // 1. get the tranction history element
        const transactionHistory = document.getElementById("history-container");

        // 2. create a new div
        const newTransaction = document.createElement("div");

        // 3. add the details to the new div
        newTransaction.innerHTML = `
            <div class="history-card p-5 bg-base-100">
                 Cash Out Successful from ${agentNumber}, Amount: ${cashOutAmount} at ${new Date().toLocaleTimeString()}
            </div>
        `;

        // 4.append the new div to the transaction history
        transactionHistory.appendChild(newTransaction);

        


    }

    else{
        alert("Invalid Pin. Please try again.");
        return;
    }





});  
    
    
    
    
    // console.log("Cash Out button was clicked.");

    // // 1. Get the value of the mobile number from input field
    // const numberInput = document.getElementById("cashOut-Number");
    // const agentNumber = numberInput.value;

    // console.log(agentNumber);

    // // 2. Get the value of the amount from input field
    // const amountInput = document.getElementById("cashOut-Amount");
    // const cashOutAmount = amountInput.value;

    // console.log(cashOutAmount);

    // // 3. Get the amount of money in the user's account 

    // const balanceElement = document.getElementById("balance");
    // const balance = balanceElement.innerText;
    // console.log(balance);

    // // 4. calculate the new balance after cashing out

    // const newBalance = parseFloat(balance) - parseFloat(cashOutAmount);
    // if (newBalance < 0) {
    //     alert("Invalid Amount");
    //     return;
    // }

    

    // // 5. check the pin number

    // const pinInput= document.getElementById("cashOut-Pin");
    // const pin= pinInput.value;

    // if(pin === "1234")
    // {
    //     alert("Cash Out successful!");
    //     console.log('New Balance: ', newBalance);

    //     balanceElement.innerText = newBalance.toFixed(2);


    // }

    // else{
    //     alert("Invalid Pin. Please try again.");
    //     return;
    // }

