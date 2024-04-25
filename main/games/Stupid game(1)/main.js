//Important variable -------
const lv1_message = "Sorry User, but there is no game here, please leave";
const lv2_message = "It's pointLess, Can you just leave usEr please ";
const lv2_false = ".";
const lv3_message = "Well, your nOt stupid atleast, try goiNg further I gueSs Or perhaps this is as far as you go?";
const lv4_message = "HUH, Im bored but still. Sorry for the level being too easy, then again it's all designed for kids idiot. \<br\> Anyways what now, this is the end. No more small little puzzles, becuase I SAY SO.";
const lv5_message = "Welp, you made it this far, but i don't really care at. At this point I lost almost all my interest in doing this, \<br\> here is a riddle. SOLVE it -";
const end_message = "Congrats I guess, you made it to the end so now you know, you won the game.";
var count1 = 0;
var count2 = 0;
var count2_box = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
//TEXT HTML
var text = document.getElementById('txt');
var text2 = document.getElementById('txt2');
var txt2_trick = document.getElementById('txt2/box');
var text3 = document.getElementById('txt3');
var text4 = document.getElementById('txt4');
//--------------------------

//Functions --------------------------------------
//Typing
function type1() {
    if (count1 < lv1_message.length) {
        var text = document.getElementById('txt');
        text.innerHTML += lv1_message[count1];
        count1++;
        setTimeout(type1,100); 
    }

}





function type2() {
    if (count2 < lv2_message.length) {
        var text2 = document.getElementById('txt2');
        text2.innerHTML += lv2_message[count2];
        count2++;
        setTimeout(type2,100); 
    } else {
        function type2_box () {
            if (count2_box >= 0) {
                console.log("Hello, Im great aint I");

            }
        }
        var txt2_trick = document.getElementById('txt2/box');
        txt2_trick.innerHTML += lv2_false[count2_box];
        count2_box++;
        setTimeout(type2_box,100); 
    }

}



function type3() {
    if (count3 < lv3_message.length) {
        var text3 = document.getElementById('txt3');
        text3.innerHTML += lv3_message[count3];
        count3++;
        setTimeout(type3,100); 

    }
}

function type4() {
    if (count4 < lv4_message.length) {
        var text4 = document.getElementById('txt4');
        text4.innerHTML += lv4_message[count4];
        count4++;
        setTimeout(type4,100); 

    }
}


function type5() {
    if (count5 < end_message.length) {
        var end = document.getElementById('win');
        end.innerHTML += end_message[count5];
        count5++;
        setTimeout(type5,100); 

    }
}



//LV:5
function final() {
    var riddle = document.getElementById('riddle');
    riddle.style.visibility = 'visible';
    var input1 = document.getElementById('whole');
    var input2 = document.getElementById('broke');
    var input3 = document.getElementById('game');
    
    window.addEventListener('keydown', (ev) => {
        if (ev.key = 'Enter') {
            if (input1.value == 'whole') {
                if (input2.value == 'broke') {
                    if (input3.value == 'game') {
                        riddle.remove();
                        document.body.style.backgroundColor = 'white';

                        setTimeout(type5,100);
                    }
                }
            } 
        }
    });
}


//-----------------------------
function circles() {
    var circles = document.getElementById('puzzle2');
    circles.style.visibility = "visible";

    var circle1 = document.getElementById('circle1');
    var circle2 = document.getElementById('circle2');
    var circle3 = document.getElementById('circle3');

    circle1.addEventListener('click', () => {
        document.body.style.backgroundColor = 'green';
    });

    circle2.addEventListener('click', () => {
        document.body.style.backgroundColor = 'red';
    });

    circle3.addEventListener('click', () => {
        document.body.style.backgroundColor = 'blue';
    });

    txt2_trick.addEventListener('click', () => {
        var input = prompt();

        if (input == 'red green blue') {
            var circles = document.getElementById('puzzle2');
            circles.remove();
            setTimeout(type3,100);

        
        }

        if (input == "CONSOLE") {
            document.getElementById('shapes').style.visibility = 'visible';
            var text4 = document.getElementById('txt4');
            text2.remove();
            txt2_trick.remove();
            text3.remove();

            document.body.style.backgroundColor = 'black';
            setTimeout(type4,100);
            text4.addEventListener('click', () => {
                var input = prompt("STOP");
                if (input == '3 0 4') {
                    
                    text4.remove();
                    var shapes = document.getElementById('shapes');
                    shapes.remove();
                    final();
                }
            });

        }
    });
}




//---------------------------------------------
window.addEventListener("mouseover",type1);
text.addEventListener('click', keep = () => {
    alert("There is no 'GAME'\n please leave.");
    document.body.addEventListener('keydown', keep2 = (ev)=> {
    console.log(ev.key);
        
        if (ev.key == 4) {
           
            text.remove();
            document.body.style.backgroundColor = "pink";
            circles();
            setTimeout(type2,100);
        }
    })
});