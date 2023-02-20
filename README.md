*Feb 20, 2022 - Franky Jr Blondeel*


# Wizardz n Monsters - using Classes

## Overview

**Live version [here](https://wizardz-n-monsters.netlify.app/)**

Wizardz n Monsters is a small dice-rolling game, that was an assignment coming from the front-end developer career path on[scrimba.com](https://scrimba.com). The goal of this assignment and the module as a whole is to get familiar with some of the more advanced JavaScript concepts.

This particular repo is the end-state of this little app. In this one we're using classes instead of constructor functions. To see the constructor function version, visit the [card-rpgConstructor](https://github.com/MrFranksJr/card-rpgConstructor) repository.

<p align="center">
<img alt="screenshot of the game" src="https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/card-rpg/result.png">
</p>

## What did we learn?

This module gradually went over some key concepts, as posted below:
<p align="center">
<img alt="screenshot of the first chapter" src="https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/card-rpg/part1/recap.png">
</p>
<p align="center">
<img alt="screenshot of the second chapter" src="https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/card-rpg/part2/recap.png">
</p>
<p align="center">
<img alt="screenshot of the third chapter" src="https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/card-rpg/part3/recap.png">
</p>


As you can see, it started out with some more advanced methods and techniques that would help us complete the journey, before shifting to Constructor functions, which allowed us to build the different characters that are visible on the screen.
In the very last part of the course, part 3, we took the same app and converted the constructor functions we used before, into Classes. Clearly demonstrating the difference between the two, and also allowing for a nice flow in understanding of the logic.





## Some technicalities
Making a random number generator is not the hardest thing in the world. So that's why I wanted something extra in the game.
### Make it visual
So what I did is that I really wanted to see the cards on the screen. I got some card faces from the [Google Code Archive](https://code.google.com/archive/p/vector-playing-cards/downloads).
Once the cards were downloaded, I got rid of the cards I didn't need, and all named them in a specific way, e.g.:
* king-hearts.png
* 9-spades.png
* ...
In the Javascript, I could then determine the value of the cards, just based of the naming, and count scoring like that.
<p align="center">
<img alt="screenshot of the start of the game" src="https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/black-jack/gamestart.png">
</p>

### Make it Random
Now, at this point the randomization factor really became an interesting thing to tackle. I'm sure there's different ways of doing it, but I solved it like this:
* Made a big array that contained all the filenames of all cards in the deck
* I then shuffle this entire Array when the player presses 'Start Game'
    * I used the [Fisher–Yates_shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle). There's a really interesting visualization/explanation [here](https://bost.ocks.org/mike/shuffle/).
* Once the cards in the array, it's simple:
    * At the start of the game, I pick the first two cards of the Array
    * I remove them from the original array, and store them in an Array cardsOnTable
    * The process is repeated every time the user draws a cards. Basically like in real life.

### Finishing touches
So yeah, the rest is just some details, calculations, etc...
Still some things missing, I might add that in the future. Right now my objective is not to make the perfect app, but to understand and familiarize myself with certain concepts, fast.
Adding a fail state will not necessarily teach me much, rather cost me time. But still, I want to track all my todo's, just like I did with the basketball counter.
<p align="center">
<img alt="screenshot of the win screen" src="https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/black-jack/blackjack.png">
</p>

## ToDo's
Obviously, the game is far from finished, but it served as a really nice training for me to get back into JavaScript.
Some things I want to add still:
* Currently nothing happens when you have $0. So I want to implement a fail-state in the future.
* You don't get to see the dealer's hand... And that takes away the entire point of the game. You can't really win in this game, unless you exactly hit a Blackjack. And that needs to change.
* One other option I thought of is that you can press an 'end-game' button and that they would get to see the next card in the stack, to see if they would've gone bust.