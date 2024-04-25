var player = document.getElementById('character');
var obstacle = document.getElementById('obstacle');
var game = document.getElementById('game');




//Movement

function moveUp() {
    
    var curr_pos = parseInt(player.style.bottom) || 150;
    var new_pos = curr_pos + 10;

    if (new_pos == 520) {
        new_pos = 150
    }


    player.style.bottom = new_pos + "px";
}

function moveDown() {
    var curr_pos = parseInt(player.style.bottom) || 150;
    var new_pos = curr_pos - 10;
    player.style.bottom = new_pos + "px";
}

function moveRight() {
    var curr_pos = parseInt(player.style.left) || 250;
    var new_pos = curr_pos + 10;

    if (new_pos == 510) {
        new_pos = 250
    }


    player.style.left = new_pos + "px";
}

function moveLeft() {
    var curr_pos = parseInt(player.style.left) || 250;
    var new_pos = curr_pos - 10;
    player.style.left = new_pos + "px";
}



function collision(player,obstacle) {

    if (player.left + player.width >= obstacle.left && 
        player.left <= obstacle.left + obstacle.width && 
        player.top + player.height >= obstacle.top &&
        player.top <= obstacle.top + obstacle.height 
    ) 
    
    {
        return true;
    } else {
        return false;
    }
}

document.addEventListener('keydown', (ev) => {
    
    if (ev.key == 'ArrowUp') {
        moveUp();

        
    }

    if (ev.key == 'ArrowDown') {    
        moveDown();
        
            
    }

    if (ev.key == 'ArrowRight') {
        moveRight();
        
    }

    if (ev.key == 'ArrowLeft') {
        moveLeft();
        
    }
    


    


})

//Collision

function update() {
    var score = document.getElementById('score')
    var count = 0;


    setInterval(() => {
        var player_pos = player.getBoundingClientRect();
        var obstacle_pos = obstacle.getBoundingClientRect();
        if (collision(player_pos,obstacle_pos) == true) {
            clearInterval(counter);
            clearInterval(moving_obstacle);
            
            obstacle.remove()
            player.remove();
        } 
    },2);


    var moving_obstacle = setInterval(() => {
        if (obstacle.style.bottom == game.style.bottom)
        var random_position = Math.floor(Math.random() * 530 - 245) + 245
        obstacle.style.left = random_position + 'px'
    }, 2000);


    



    var frame = 0
    var counter = setInterval(() => {
        if (frame % 10 == 0) {
            count++;
            score.innerHTML = count
        }

        frame++;
    });
   
    
    
}

document.body.onload = update();

