import charData from '/data/characterData.js'
import Character from '/data/characterConstructor.js'

let monstersArray = ["orc", "demon", "goblin"]
const attackBtn = document.getElementById('attack-button')

function getNextMonster() {
      const nextMonsterData = charData[monstersArray.shift()]

      return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack() {
      if (!attackBtn.disabled) {
            wizard.setDiceHtml()
            monster.setDiceHtml()
            wizard.takeDamage(monster.currentDiceScore)
            monster.takeDamage(wizard.currentDiceScore)
            renderCharacters()

            if (wizard.isDead) {
                  endGame()
            }
            else if (monster.isDead) {
                  attackBtn.disabled = true
                  if (monstersArray.length > 0) {
                        setTimeout(() => {
                              monster = getNextMonster()
                              renderCharacters()
                              attackBtn.disabled = false
                        }, 1500)
                        
                  }
                  else {
                        endGame()
                  }
            }
      }
}

function endGame() {
      attackBtn.disabled = true
      const endMessage = monster.isDead && wizard.isDead ? 'No victors - all creatures are dead' : wizard.isDead ? 'The Monsters are victorious!' : 'The Wizard wins'

      const endEmoji = (wizard.isDead && monster.isDead) || wizard.isDead ? '☠️' : '🔮'

      setTimeout(() => {
            document.body.innerHTML = `
            <div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
            </div>` 
      }, 1500)
}

function renderCharacters() {
      document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
      document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

const wizard = new Character(charData.hero)
let monster = getNextMonster()

renderCharacters()

attackBtn.addEventListener('click', attack)