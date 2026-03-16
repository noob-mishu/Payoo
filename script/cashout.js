document.getElementById("cashOut-btn").addEventListener("click", function(){
    console.log("Cash Out button was clicked.");



    // 1. Get the value of the mobile number from input field
    const numberInput = document.getElementById("cashOut-Number");
    const agentNumber = numberInput.value;

    console.log(agentNumber);
});