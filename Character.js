export class Character {
    constructor(data) {
        Object.assign(data, this)
    }

    getCharacterHtml = function () {
        const { charName, avatar, diceCount, health } = this

        return `
        <h3 id="name">${charName}</h3>
        <img id="avatar" src="${avatar}">
        <p class="text-div">health: <span id="health">${health}</span></p>
        <p class="text-div">Dicecount: <span id="dice-count">${diceCount}</span></p>`
    }
}
