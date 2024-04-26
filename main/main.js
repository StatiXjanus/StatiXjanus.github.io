var hangman = document.getElementById('hangman');
var tic_tac = document.getElementById('tic-tac-toe');
var block_evade = document.getElementById('block-evade');
var mark1 = document.getElementById('block1');


//---------EXIT-------------//

mark1.addEventListener('click', ()=> {
    window.close()
})


//--------------------------



//---------------------------------------------
hangman.addEventListener('mouseover', () => {
    hangman.style.background = 'red';
    hangman.style.color = 'purple';


});


hangman.addEventListener('mouseout', () => {
    hangman.style.background = 'yellow';
    hangman.style.color = 'black';
});


/*---------------------------------------------
Hover Animations
---------------------------------------------*/


/* Not ready
tic_tac.addEventListener('mouseover', () => {
    tic_tac.style.background = 'red';
    tic_tac.style.color = 'purple';


});


tic_tac.addEventListener('mouseout', () => {
    tic_tac.style.background = 'blue';
    tic_tac.style.color = 'black';
});
*/

//----------------------------------------------
block_evade.addEventListener('mouseover', () => {
    block_evade.style.background = 'red';
    block_evade.style.color = 'purple';


});


block_evade.addEventListener('mouseout', () => {
    block_evade.style.background = 'green';
    block_evade.style.color = 'black';
});

/* ----------------------------------------------
Links
------------------------------------------------*/






