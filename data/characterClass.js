import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from '/data/utils.js'

class Character {
    constructor(data) {
        Object.assign(this, data)
        this.maxHealth = this.health
        this.diceHtml = getDicePlaceholderHtml(this.diceCount)
    }
    getHealthBarHtml() {
        const  percent = getPercentage(this.maxHealth, this.health)
        return `
            <div class="health-bar-outer">
            <div class="health-bar-inner ${percent <= 25 ? "danger" : ""}" style="width: ${percent}%;">
            </div>
            </div>
            `
    }
    setDiceHtml() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join('')
    }
    getCharacterHtml() {
        const healthBar = this.getHealthBarHtml()
        return `
        <div class="character-card">
            <div class="upper-card">
              <h4 class="name"> ${this.name} </h4>
              <img class="avatar" src="${this.avatar}"/>
              <p class="health">Health: <b> ${this.health} </b></p>
              ${healthBar}
            </div>
            <div class="dice-container">
                ${this.diceHtml}
            </div>
        </div>
        `
    }
    takeDamage(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((a, b) => a + b)
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.health = 0
            this.isDead = true
        }
    }
}

export default Character