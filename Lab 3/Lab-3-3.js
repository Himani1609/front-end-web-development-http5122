//LAB 3 - ARRAYS & LOOPS - PART 3

//Amasean Online Shopping Centre

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
userPrice =[];
var runningTotal = 0; 


//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while(runningTotal<35){
	//GET ITEM COST FROM USER
	submittedPrice = prompt("What is the price of the item you bought?");
	console.log(submittedPrice);

	//CONVERT USER INPUT TO A NUMBER
	num = parseInt(submittedPrice);
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	runningTotal += num;
	
	//PUSH ITEM COST TO CART ARRAY
	userPrice.push(num);
	console.log(userPrice);
}


//SEND POPUP MESSAGE TO USER
alert("Your shipping for this order will be free! The total value of items is $"+runningTotal);

//SEND OUTPUT TO CONSOLE
console.log("Item prices: "+userPrice.join("|"));
