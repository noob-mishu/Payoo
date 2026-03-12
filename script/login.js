document.getElementById("login-btn").addEventListener("click", function(){
    console.log("Login button was clicked.");

    // 1. Get the value of the mobile number from input field
    const numberInput = document.getElementById("mobile-number");
    const mobileNumber = numberInput.value;

    console.log(mobileNumber);

    // 2. get the value of the password from input field

    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;

    console.log(password);

    // 3. Validate the mobile number and password

    if(mobileNumber === "01558238229" && password === "Mishu"){
        alert("Login successful!");

        window.location.assign("./Homepage.html");
    }

    else{
        alert("Invalid mobile number or password. Please try again.");
    }

});
