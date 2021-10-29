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
let totalGingerbread = 0;
let totalChocolateChip = 0;
let totalSugarSprinkle = 0;
let totalQuantity = 0;

let quantitygb = document.querySelector('#qty-gb');
let overallTotal = document.querySelector('#qty-total');


// console.log(totalQuantity);

let GingerbreadMinus = document.querySelector('#add-gb');
    // console.log(GingerbreadMinus)
    GingerbreadMinus.addEventListener('click', function() {
    //console.log('Gingerbread - button was clicked!')
    totalQuantity = totalQuantity + 1;
    console.log(totalQuantity)
    quantitygb.textContent = totalQuantity;
    overallTotal.textContent = totalQuantity ;

});

let GingerbreadPlus = document.querySelector('#minus-gb');
        GingerbreadPlus.addEventListener('click', function() {
        // console.log('Gingerbread + button was clicked!') 
        if (totalQuantity > 0 ){
            totalQuantity= totalQuantity - 1};
            quantitygb.textContent = totalQuantity; 
            overallTotal.textContent = totalQuantity;

});

let quantitycc = document.querySelector('#qty-cc');


let ChocolateChipPlus= document.querySelector('#add-cc');
    ChocolateChipPlus.addEventListener('click', function() {
        // console.log('chocolate chip + button was clicked!') 
        totalQuantity = totalQuantity + 1;
        quantitycc.textContent = totalQuantity;
        overallTotal.textContent = totalQuantity;
    });

    let ChocolateChipMinus = document.querySelector('#minus-cc');
   
    ChocolateChipMinus.addEventListener('click', function() {
    // console.log('chocolate chip - button was clicked!')
    if (totalQuantity > 0 ){
        totalQuantity= totalQuantity - 1};
        quantitycc.textContent = totalQuantity;
        overallTotal.textContent = totalQuantity;
})

let quantityss = document.querySelector('#qty-sugar');

    let SugarSprinklePlus = document.querySelector('#add-sugar');
    SugarSprinklePlus.addEventListener('click', function() {
    // console.log('Gingerbread + button was clicked!') 
    totalQuantity = totalQuantity + 1;
    quantityss.textContent = totalQuantity;
    overallTotal.textContent = totalQuantity;
})
let SugarSprinkleMinus = document.querySelector('#minus-sugar');
        SugarSprinkleMinus.addEventListener('click', function() {
            // console.log('Gingerbread - button was clicked!')
            if (totalQuantity > 0 ){
                totalQuantity= totalQuantity - 1};
                quantityss.textContent = totalQuantity;
                overallTotal.textContent = totalQuantity;
        })
        

    