// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Olatunde Adetayo" 

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle



// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies

let totalQuantity1 = 0;
let totalQuantity2 = 0;
let totalQuantity3 = 0;


let quantitygb = document.querySelector('#qty-gb');
let overallTotal = document.querySelector('#qty-total');


// console.log(totalQuantity);

let GingerbreadPlus = document.querySelector('#add-gb');
    // console.log(GingerbreadMinus)
    GingerbreadPlus.addEventListener('click', function() {
    //console.log('Gingerbread - button was clicked!')
    totalQuantity1 = totalQuantity1 + 1;
    console.log(totalQuantity1)
    quantitygb.textContent = totalQuantity1;
    overallTotal.textContent = totalQuantity1 + totalQuantity2 +totalQuantity3;

});

let GingerbreadMinus = document.querySelector('#minus-gb');
        GingerbreadMinus.addEventListener('click', function() {
        // console.log('Gingerbread + button was clicked!') 
        if (totalQuantity1 > 0 ){
            totalQuantity1= totalQuantity1 - 1};
            quantitygb.textContent = totalQuantity1; 
            overallTotal.textContent = totalQuantity1 + totalQuantity2 +totalQuantity3;
});

let quantitycc = document.querySelector('#qty-cc');


let ChocolateChipPlus= document.querySelector('#add-cc');
    ChocolateChipPlus.addEventListener('click', function() {
        // console.log('chocolate chip + button was clicked!') 
        totalQuantity2 = totalQuantity2 + 1;
        quantitycc.textContent = totalQuantity2;
        overallTotal.textContent = totalQuantity1 + totalQuantity2 +totalQuantity3;
    });

    let ChocolateChipMinus = document.querySelector('#minus-cc');
   
    ChocolateChipMinus.addEventListener('click', function() {
    // console.log('chocolate chip - button was clicked!')
    if (totalQuantity2 > 0 ){
        totalQuantity2= totalQuantity2 - 1};
        quantitycc.textContent = totalQuantity2;
        overallTotal.textContent = totalQuantity1 + totalQuantity2 +totalQuantity3;
})

let quantityss = document.querySelector('#qty-sugar');

    let SugarSprinklePlus = document.querySelector('#add-sugar');
    SugarSprinklePlus.addEventListener('click', function() {
    // console.log('Gingerbread + button was clicked!') 
    totalQuantity3 = totalQuantity3 + 1;
    quantityss.textContent = totalQuantity3;
    overallTotal.textContent = totalQuantity1 + totalQuantity2 +totalQuantity3;
})
let SugarSprinkleMinus = document.querySelector('#minus-sugar');
        SugarSprinkleMinus.addEventListener('click', function() {
            // console.log('Gingerbread - button was clicked!')
            if (totalQuantity3 > 0 ){
                totalQuantity3= totalQuantity3 - 1};
                quantityss.textContent = totalQuantity3;
                overallTotal.textContent = totalQuantity1 + totalQuantity2 +totalQuantity3;
        })
        
let
    