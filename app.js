// import functions

const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const input3 = document.getElementById('input-3');
const input4 = document.getElementById('input-4');
const input5 = document.getElementById('input-5');
const input6 = document.getElementById('input-6');
const input7 = document.getElementById('input-7');
const input8 = document.getElementById('input-8');
const input9 = document.getElementById('input-9');
const input10 = document.getElementById('input-10');
const input11 = document.getElementById('input-11');
const button = document.getElementById('submit-button');
const paragraph = document.getElementsByClassName('mad-lib');

const inputs = [input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11]


// reference needed DOM elements

button.addEventListener('click', () => {
    for (let i = 0; i < inputs.length; i++) {
        document.getElementsByClassName('input-' + i).textValue = inputs[i].value;  
    }
});


// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
