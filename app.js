import Character from "./Character.js"
import characterData from './data.js'

let heroDiv = document.getElementById('hero')
let monsterDiv = document.getElementById('monster') 


const wizard = new Character(CharacterData.hero)
render()

function render() {
    heroDiv.innerHTML = wizard.getCharacterHtml()
}
