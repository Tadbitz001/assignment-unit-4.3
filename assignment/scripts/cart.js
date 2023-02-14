console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

/*
var basket =[];
function addItem (item){
    basket.push(item);
    return true;
}
addItem("apple");
addItem("pear");
//addItem("nuts");
//addItem("beer");

console.log(basket);
// test to see if items apear in basket.


function listItems (basket) {
   basket.forEach(function(item){
        console.log(item);
    })
}

//To test this we will need to designate a basket
//let basket = ["apples", "pears", "oranges", "cherries"]

let basket = ["apples", "pears", "oranges", "cherries"]
listItems(basket);

function empty (basket) {
    basket.length = 0;
}

empty();
console.log(basket);
//should show an empty basket.but shows undefined 

*/

const maxItems =5;
function isFull () {
return basket1.length>=maxItems;
}

var basket1 =[];
function addItem (item){
   if (isFull()) {
    return false;
   } 
   basket1.push(item);
   return true;
}

addItem('cart');
console.log(basket1);
addItem('crayons');
addItem('salt');
addItem('pencils');
addItem('pepsi');
addItem('eraser');
addItem('ruler');

console.log(basket1);
console.log(maxItems);

//Problem #4

function removeItem (string) {
    
}
