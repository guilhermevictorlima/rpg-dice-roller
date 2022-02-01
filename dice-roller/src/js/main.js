import rollOptions from './options.js';

let anotherDieInUse = false;
let lastDieKeeper;

const diceList = document.querySelectorAll('[data-die]');
const buttonDiceList = document.querySelectorAll('[data-button]');

buttonDiceList.forEach(die => {
	die.addEventListener('click', ()=> {

		if(anotherDieInUse) {
            const lastDieParent = 
				document.querySelector('.options-dice').parentElement;

            lastDieParent.removeChild(lastDieParent.children[0]);
			lastDieParent.innerHTML = lastDieKeeper;
			lastDieKeeper = '';

			lastDieParent.classList.remove('selected-die');
			lastDieParent.classList.add('unselected-die');
		}

		showRollOptions(die);

	})
});

const showRollOptions = (die)=> {
	anotherDieInUse = true;
	lastDieKeeper = die.parentElement.innerHTML;

	const diceListPosition = parseInt(die.parentElement.id);

	diceList[diceListPosition].classList.remove('unselected-die');
	diceList[diceListPosition].classList.add('selected-die');

	rollOptions(parseInt(die.id), die);

}