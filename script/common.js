// function for get value from anywhere in the code

function getValueFromInput(id)
{
    const input = document.getElementById(id);
    const value = input.value;

    console.log(id,value);
    return value;
}


// function for get balnace from anywhere in the code
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(Number(balance));
    return Number(balance);
}

// function for set balnace in the code
function setBalance(newBalance)
{
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = newBalance;
}

