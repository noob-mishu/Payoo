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


// function for showing only selected Section
function showOnly(id,btn)
{
    const addMoney= document.getElementById("addMoney");
    const cashOut= document.getElementById("cashOut");
    const sendMoney= document.getElementById("sendMoney");
    const getBonus = document.getElementById("getBonus");

    // hide all sections
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    sendMoney.classList.add("hidden");
    getBonus.classList.add("hidden");

    // show only the selected section
    const selected= document.getElementById(id);
    selected.classList.remove("hidden");

     // remove active styles
    const buttons = document.querySelectorAll(".menu-btn");
    buttons.forEach(b => {
        b.classList.remove("bg-indigo-400", "text-white");
    });

    // add active style
    btn.classList.add("bg-indigo-400", "text-white");

}

