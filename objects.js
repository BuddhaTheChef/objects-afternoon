// Create an object called user that has name, age, password properties and assign them appropriate values.

// Code Here
var user = {
  name:'Aj' ,
  age:21 ,
  password:1234
};


// Add an email and username, as well as a method called alertUser that alerts the users name, to your user object using dot notation.

// Code Here
user.email = 'ajwietechaii@yahoo.com';
user.username = 'BuddhaTheChef';
user.alertUser = function(){
  alert(user.name);
}

user.alertUser();


// Now loop over your user object and alert each of the keys.

// Code Here


for (var key in user){
  alert(key)
}



// Now loop over your user object and alert each of the values for each key.

// Code Here
for(var key in user){
  alert(user[key]);
}


// Remove the username from your user object

// Code Here

delete user[username];

// Create an object called creditCard that has number, cvc, type, and limit properties and assign them appropriate values.

// Code Here

var creditCard = {
  number:123456 ,
  cvc:123 ,
  type:'Visa' ,
  limit: 500
}

// Create a variable called alternating. Set it equal to the string bonusCategories.

// Code Here
var alternating = 'bonusCategories';


/* Using bracket notation, add a bonusCategories key to your creditCard object using 'alternating'.
    Set it's value to an array of 3 items that are objects.
    Each object should have one key value pair.
    That key value pair should be the category as the key and the percent it's work for the bonus as the value.
    (e.g. Department Stores, 5%)

    Using dot notation add another key to your object called 'bank' with the value being an object with 2 keys,
        the bank name, and the bank address.

    */

// Code Here

creditCard[alternating] = [
  {
    Department Stores : 5%
  },
  {
    Tech Stores : 80%
  },  {
      Food Stores : 15%
  },
];

creditCard.bank = {
  bank name: navyFederal,
  bank address: "12345 Drive",
}

// Write a function that will take your creditCard object and user object as arguments and combine them into one object. /* HINT: You will need a for..in loop */

// Code Here
function cool(creditCard,user){
  for(var key in user){
  creditCard[key]=user[key];
  }
return user;
}



/*Below you are given an object. Write a function that will loop over the allies property, remove LittleFinger, and insert Dragon Lady.
    It will also change alive to 'More Than Ever'.
    Return the object. */

var obj = {
    user: 'Jon Snow',
    allies: ['That guy into Brienne', 'Ser Davos', 'LittleFinger'],
    alive: 'Sort of',
  };

  // Code Here

  function wow(obj){
    for(var i = 0; i < obj.allies.length; i++){
           if(obj.allies[i] === "LittleFinger"){
             obj.allies[i] === "Dragon Lady";
           }
         }
     obj.alive = "More Than Ever";
     return obj;
   }

   wow(obj);
