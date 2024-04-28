var hangman = document.getElementById('hangman');
var tic_tac = document.getElementById('tic-tac-toe');
var block_evade = document.getElementById('block-evade');
var solar_system = document.getElementById('solar-system');
var earth = document.getElementById('earth');

//---------------------------------------------
var mark1 = document.getElementById('mark1');
var mark2 = document.getElementById('mark2');
var mark3 = document.getElementById('mark3');
var mark4 = document.getElementById('mark4');

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


solar_system.addEventListener('mouseover', () => {
    solar_system.style.background = 'red';
    solar_system.style.color = 'purple';
});


solar_system.addEventListener('mouseout', () => {
    solar_system.style.background = 'darkblue';
    solar_system.style.color = 'black';
});

earth.addEventListener('mouseover', () => {
    earth.style.background = 'red';
    earth.style.color = 'purple';
});


earth.addEventListener('mouseout', () => {
    earth.style.background = 'darkcyan';
    earth.style.color = 'black';
});



//OPEN/LINK
hangman.addEventListener('click', () => {
    window.open('https://statixjanus.github.io/main/games/Hangman/main.html');
})

block_evade.addEventListener('click', () => {
    window.open('https://statixjanus.github.io/main/games/block-evade/index.html');
})

solar_system.addEventListener('click', () => {
    window.open('https://statixjanus.github.io/main/space/SolarSystem/index.html');
})

earth.addEventListener('click', () => {
    window.open('https://statixjanus.github.io/main/space/Earth-sun/index.html');
})

//EXIT

mark1.addEventListener('click', ()=> {
    window.close('https://statixjanus.github.io/main/')
})

mark2.addEventListener('click', ()=> {
    window.close('https://statixjanus.github.io/main/')
})

mark3.addEventListener('click', ()=> {
    window.close('https://statixjanus.github.io/main/')
})

mark4.addEventListener('click', ()=> {
    window.close('https://statixjanus.github.io/main/')
})


