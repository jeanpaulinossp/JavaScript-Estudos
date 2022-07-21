let num1 = [1,2,3,4,5,6];
let num2 = [1,2,3];

function verificacao (arr) {
    if(arr.length >= 5) {
        console.log ("Muitos Elementos!");
    } else {
        console.log ("Poucos Elementos!"); 
    }
}

verificacao (num1);
verificacao (num2);