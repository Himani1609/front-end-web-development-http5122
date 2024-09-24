//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
var ourTeam = ["Dhruv","Himani","Sarrah","Isha","Digna"]

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourTeam)

//REMOVE LAST MEMBER
ourTeam.pop()
console.log(ourTeam)

//ADD SEAN TO FRONT OF ARRAY
ourTeam.unshift("Sean")
console.log(ourTeam)

//REARRANGE THE ARRAY ALPHABETICALLY
var sortedArray = ourTeam.sort()
console.log(sortedArray)

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("We have "+ourTeam.length+" people in our group.")

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for(i=0;i<ourTeam.length;i++){
    var incrementNum = i+1
console.log("Team member "+ ourTeam[i]+" is #"+incrementNum +".")
}
