//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3"); //COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//======== VARIABLES =========
var userChoice;
var userEmail;

//========= LOGIC =============

//Create a popup box that asks the user if they would like to join your mailing list.
userChoice = confirm("Do you want to join the mailing list?");
console.log(userChoice);



//If they agree, provide a popup texbox to ask their email with a default value.
//validate the input against no input, the default text, or a Cancel click.

/*If they intend to signup but the input is invalid (empty string, null, or the default text), 
the message will be, “Thank you, but your email was not valid.” */

//If successful, the message will read, “Thank you, our next newsletter will be sent to “, with the provided email address.

//If the user declines to join, the message will read, “Thank you, we will not bother you again.”

if (userChoice === true) {

    userEmail = prompt("Email Adress","me@example.com");
    console.log(userEmail);

        if (userEmail === "" || userEmail === null || userEmail === "me@example.com") {
            alert("Thank you, but your email was not valid.");
        }

        else {
            alert("Thank you, our next newsletter will be sent to" +" "+ userEmail);
        }
        
}

else {
    alert("Thank you, we will not bother you again.");
}










