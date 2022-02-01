import rollOptions from "./src/js/options.js"

let inUse = false;
var listKeeper;

const diceElement = document.querySelectorAll('[data-button]');
const diceList = document.querySelectorAll('[data-die]');

diceElement.forEach(die => {
    die.addEventListener('click', ()=> {

        if(!inUse) {

            changeToRollOptions(die);   
        
		} else {

            const optionsList = document.getElementsByClassName('options-dice')[0];
            const dieItem = optionsList.parentElement;

            dieItem.removeChild(optionsList);
            dieItem.style.backgroundColor = "#444444";
            dieItem.style.borderColor = "#171717";

            dieItem.innerHTML = listKeeper;
			listKeeper = "";

            changeToRollOptions(die);
        }

    })
});

const changeToRollOptions = (die)=> {
    inUse = true;
    listKeeper = die.parentElement.innerHTML;

    const listMap = parseInt(die.parentElement.id);
    console.log(listKeeper);
	console.log(listMap);

    diceList[listMap].style.backgroundColor = "#171717";
    diceList[listMap].style.borderColor = "black";
    
    rollOptions(parseInt(die.id), die);      
}