
let testWords = ["which",
    "there",
    "their",
    "about",
    "would",
    "these",
    "other",
    "words"];

let wordsList = [];

fetch('words.txt')
    .then(response => response.text())
    .then(data => {
        wordsList = data.split("\n");
    });

wordsList.forEach(x => console.log(x));

let letterOne = document.getElementById('letterOne');
let letterTwo = document.getElementById('letterTwo');
let letterThree = document.getElementById('letterThree');
let letterFour = document.getElementById('letterFour');
let letterFive = document.getElementById('letterFive');

let yellowLetters = document.getElementById('yellowLetters');

let garyLetters = document.getElementById('grayLetters');

var resultsString = "";
let results = document.querySelector('.results');

let run = document.querySelector('.run');
run.addEventListener('click', getHint);

function getHint() {
    var l1 = letterOne.value;
    var l2 = letterTwo.value;
    var l3 = letterThree.value;
    var l4 = letterFour.value;
    var l5 = letterFive.value;
    var pattern =
        (l1 !== "" ? l1 : "[a-z]") +
        (l2 !== "" ? l2 : "[a-z]") +
        (l3 !== "" ? l3 : "[a-z]") +
        (l4 !== "" ? l4 : "[a-z]") +
        (l5 !== "" ? l5 : "[a-z]");

    const re = new RegExp(pattern);

    var validWords = [];

    testWords.forEach(x => {
        if (re.test(x)) {
            validWords.push(x);
        }
    });

    var yellowLetterArray = yellowLetters.value.split("");
    var grayLetterArray = garyLetters.value.split("");

    for (var i = 0; i < validWords.length; i++) {
        var word = validWords[i];

        var hasRequiredLetter = yellowLetterArray.length;

        yellowLetterArray.forEach(x => {
            if (word.includes(x)) {
                hasRequiredLetter--;
            }
        });

        var hasInvalidLetter = false;

        grayLetterArray.forEach(x => {
            if (word.includes(x)) {
                hasInvalidLetter = true;
                // break;
            }
        });

        if (hasRequiredLetter === 0 && !hasInvalidLetter) {
            resultsString += word + ", ";
        }
    }

    resultsString = resultsString.slice(0, resultsString.length - 2);
    results.textContent = resultsString;
}







// public string readToString()
// {
// 	var path = @"C:\Users\rgay\Documents\LINQPad Queries\personal\wordle-hints\5-letter-words";
// 	return System.IO.File.ReadAllText(path);
// }




// let customName = document.getElementById('customname');
// let randomize = document.querySelector('.randomize');

// // Creates a random value for use in selecting an X, Y, Z array string

// function randomValueFromArray(array){
//   return array[Math.floor(Math.random()*array.length)];
// }


// // Links the clicking of button to the result() function

// randomize.addEventListener('click', result);

// // Places the storyText into newStory so that we can edit it

// let newStory = storyText;

// // Creates the result() function --> This runs when "generate" button is pressed



//   // Convert to different units of measurement

//   if(document.getElementById("uk").checked) {
//     let weight = Math.round(300/14) + ' stone';
//     let temperature =  Math.round((94 - 32) * (5 / 9)) + '° centigrade';
//     newStory = newStory.replace('300 pounds', weight);
//     newStory = newStory.replace('94° fahrenheit', temperature);
//   }

