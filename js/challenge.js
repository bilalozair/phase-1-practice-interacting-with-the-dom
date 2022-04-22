let counter = 0;
// set timer

function startTimer(){
    secondTimer = setTimeout(function(){
        document.getElementById('counter').innerHTML = counter++
        startTimer();   
    },1000)
  }
// Start Timer 
document.addEventListener('DOMContentLoaded',startTimer);


// set variables for elements to be given click listeners
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const submit = document.getElementById('submit');

// Create Obj containing button elements
let buttonObj = [];
buttonObj.push(plus,minus,heart,pause,submit);

// Function to handle disable event when "pause" is clicked

function handleDisable () {
    buttonObj.forEach(btn => {
        if (btn.id != 'pause') {
            if (btn.disabled === true) {
                btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        };
    });
};

// Adding click listeners and response actions to all buttons
buttonObj.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        if (btn.id === 'plus') {
            counter++;
        } else if (btn.id === 'minus') { 
            counter--;
        } else if (btn.id === 'heart') {
            let li = document.createElement('li');
            let s = document.createElement('span');
            s.innerHTML = e.detail;
            li.innerHTML = `${counter} was liked ${s.innerHTML} time/s`;
            document.querySelector('ul').appendChild(li);
        } else if (btn.id === 'pause' && btn.textContent === ' pause ') {
            clearTimeout(secondTimer);
            handleDisable();
            btn.innerHTML = ' resume '
        } else if (btn.id === 'pause' && btn.textContent === ' resume ') {
            startTimer();
            handleDisable();
            btn.innerHTML = ' pause '
        } else if (btn.id === 'submit'){
            e.preventDefault();
            let comment = document.getElementById('comment-input');
            const pComment = document.createElement('p');
            pComment.innerHTML = `${comment.value}`;
            document.getElementById('list').append(pComment);
            comment.value = '';
        }
    })
});
