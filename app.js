import {Character} from "./Character.js"
import {characterData} from './data.js'


let monsterDiv = document.getElementById('monster') 


let wizard = new Character(characterData.hero)
render()

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
}

console.log(render)