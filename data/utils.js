///////////////////////////////////EXPORTS////////////////////////////////////
export { getDiceRollArray, getDicePlaceholderHtml, getPercentage }

///////////////////////////////////FUNCTIONS//////////////////////////////////
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() => Math.floor(Math.random()*6) + 1)
}

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill('<div class="placeholder-dice"></div>').join('')
}

const getPercentage = (maximumHealth, remainingHealth) => (100 * remainingHealth) / maximumHealth