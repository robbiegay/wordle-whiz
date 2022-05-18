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
    results.textContent = "";

    var l1 = letterOne.value.trim().toLowerCase();
    var l2 = letterTwo.value.trim().toLowerCase();
    var l3 = letterThree.value.trim().toLowerCase();
    var l4 = letterFour.value.trim().toLowerCase();
    var l5 = letterFive.value.trim().toLowerCase();
    var pattern =
        (l1 !== "" ? l1 : "[a-z]") +
        (l2 !== "" ? l2 : "[a-z]") +
        (l3 !== "" ? l3 : "[a-z]") +
        (l4 !== "" ? l4 : "[a-z]") +
        (l5 !== "" ? l5 : "[a-z]");

    const re = new RegExp(pattern);

    var validWords = [];

    wordsList.forEach(x => {
        if (re.test(x)) {
            validWords.push(x);
        }
    });

    var yellowLetterArray = yellowLetters.value.trim().toLowerCase().split("");
    var grayLetterArray = garyLetters.value.trim().toLowerCase().split("");

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
            }
        });

        if (hasRequiredLetter === 0 && !hasInvalidLetter) {
            resultsString += word + ", ";
        }
    }

    resultsString = resultsString.slice(0, resultsString.length - 2);
    results.textContent = resultsString;
    resultsString = "";
}

/*
Removed a few words:
pussy
dildo
dicks
cunts
fucks
shits
titty
turdy
turds
*/