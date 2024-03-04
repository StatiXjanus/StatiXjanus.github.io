//LIST for words;  -------
const words = [
    "hello","world","apple","banana","cat","dog","elephant","flower","grape","blue",
    "house","island","jazz","kite","lemon","mountain","night","ocean","piano","queen","speaker","book","pastel",
    "rainbow","sun","tree","umbrella","violet","water","xylophone","yellow","zebra","violin","viola","cello","base","elementary"
    // ... add more words as needed

  ];
  
var word = words[Math.floor(Math.random() * words.length)]
var count = 7;
var save = new Set(word);

var guessed_letters = document.getElementById('guessed');
var wrongGuesses = [];

//-------------------------

//GAME MECHANICs
var node = document.getElementById('word');
var lives = document.getElementById('counter');
var result = document.getElementById('result');
var store = [];


node.innerHTML += "_ ".repeat(word.length);
node.innerHTML += '\<br\>';
lives.innerHTML = "Lives left:" + count;

//Function to show the current state of the word
function display() {
    for (letter in word) {
        if (store.includes(word[letter])) {
            node.innerHTML += word[letter];
        } else {
            node.innerHTML += "_ ";
            
        }
    }

    node.innerHTML += '\<br\>';
}

// Checks for any buttons clicked
btw = document.body.addEventListener("keydown",(ev) => {
    if ("abcdefghijkelmnopqrstuvwxyz".split("").includes(ev.key) == false) {
        alert("Not a letter");

    } else {
        lives.innerHTML = "Lives left:" + count
        if (word.includes(ev.key)) {
            if (store.includes(ev.key) === false) {
                store.push(ev.key);
                display();
            
            }
    
        
        } else {
            if (wrongGuesses.includes(ev.key)) {
                alert("Already guessed : " + ev.key);
                lives.innerHTML = "Lives left:" + count;

            } else {
                count -= 1
                lives.innerHTML = "Lives left:" + count;
                guessed_letters.innerHTML += ev.key;
                wrongGuesses.push(ev.key);
            }
         
        }

        if (count == 0) {
            result.innerHTML = "Sorry, YOU LOST! The word was: " + word;
            node.remove();
            lives.remove();
            guessed_letters.remove();
            btw.remove();
        }

        if (save.size == store.length) {
            result.innerHTML = "YOU WON";
            node.remove();
            count = -100;
            lives.remove();
            guessed_letters.remove();
            btw.remove();
        }


    }
    
    
});




