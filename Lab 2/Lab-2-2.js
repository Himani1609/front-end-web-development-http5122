//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		var userName = "dart";
		// Correct password
		var password = "vader";
		// user name input
		var userNameInput;
		// password input
		var passwordInput;



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
userNameInput = prompt("Username");

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(userName);

//5. CREATE POPUP BOX FOR PASSWORD
passwordInput = prompt("Password");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(password);

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE

if (userNameInput === userName && passwordInput === password) { 
	alert("Welcome Back");
	console.log("Login Successful");
}
else {
	alert("Invalid username/password")
	console.log("Login unsuccessful");
}






