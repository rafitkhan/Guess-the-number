let show     = document.querySelector('.show')
let error    = document.querySelector('.error')
let value1   = document.querySelector('.value1')
let p1input  = document.querySelector('.p1input')
let p1button = document.querySelector('.p1button')
let value2   = document.querySelector('.value2')
let p2input  = document.querySelector('.p2input')
let p2button = document.querySelector('.p2button')
//==========player 1 part start====================//
p1button.addEventListener('click',()=>{
    if(p1input.value == ''){
        error.innerHTML = 'Enter a number'
    }else{
        if(p1input.value>10){
            error.innerHTML = 'Enter number below 10'
        }else{
            error.innerHTML = ''
            show.innerHTML = 'Player two'
            value1.style = 'display:none'
            value2.style = 'display:block'
        }
    }
})
//==========player 2 part start==================//
 p2button.addEventListener('click', () => {
    if (p2input.value == '') {
        error.innerHTML = 'Guess a number';
    } else {
        error.innerHTML = ''; // Clear any previous error messages

        // Convert the input value to a number
        const guess = parseInt(p2input.value);

        if (isNaN(guess)) {
            error.innerHTML = 'Invalid input. Please enter a valid number.';
        } else if (guess > 10) {
            error.innerHTML = 'Guess number below 10';
        } else {
            // Compare the guess with the target number
            if (guess > p1input.value) {
                error.innerHTML = 'Wrong guess. Hint: too high';
            } else if (guess < p1input.value) {
                error.innerHTML = 'Wrong guess. Hint: too low';
            } else {
                error.innerHTML = 'Congratulations! You guessed the number!';
                show.innerHTML = 'Winner'
            }
        }
    }
});
