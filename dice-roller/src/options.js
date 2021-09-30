import roll from "./scrolling.js"

const Options = (value, element)=> {

// Clears the displayed content of the chosen die and add the choice options.

    const listChanger = element.parentElement;
    listChanger.innerHTML = "";

    const options = contentOptions(value);

    listChanger.innerHTML = options;

// This captures the amount of dice chosen by the user.


// The attribute choice code.

    const atributte = atributeChoice();

/*
Here the choice of difficulty occurs. If nothing is selected, the default is 
Normal difficulty.
*/

    var difficulty = difficultyChoice();

// Here the 'roll' function is called when the button is pressed.

    const rollButton = document.querySelector('[data-roll-button]');
    rollButton.addEventListener('click', ()=> {
        
        const quantity =
		parseInt(document.querySelector('[data-amount]').value);

        if(!Number.isInteger(quantity) || quantity <= 0) {
            alert('Please enter a valid number...');
            input.value = "";
        } else {
            //roll(value, quantity, atributte, difficulty)
            console.log('Funcionou! ' + quantity)
        }
    })
}

const contentOptions = (value)=> {
    const content = `
    		<div class="options-dice">
				<h3>Choose how many dice</h3>
				<input type="number" data-amount class="amount-dice" value="1" required><p class="amount-p">d${value}</p>
				<h3>Atributtes</h3>
				<div class="dice-atributtes"><button data-minus>-</button> <p data-show-atributte>0</p> <button data-plus>+</button></div>
				<p>Advantages or disadvantages</p>
				<h3>Difficulty</h3>
				<button class="difficulty-button" id="Easy">Easy</button>
				<button class="difficulty-button" id="Normal">Normal</button>
				<button class="difficulty-button" id="Hard">Hard</button><br>
				<input type="submit" value="Roll!" class="roll-dice" data-roll-button>
			</div>

    `
    return content;
}

const atributeChoice = ()=> {

    let atributte = 0;

    const minusButtom = document.querySelector('[data-minus]');
    const plusButtom = document.querySelector('[data-plus]');
    const showAtributte = document.querySelector('[data-show-atributte]');

    minusButtom.addEventListener('click', ()=> {
        atributte -= 1;

        if(atributte > 0){
            showAtributte.innerHTML = "+" + atributte;
        } else showAtributte.innerHTML = atributte
    });

    plusButtom.addEventListener('click', ()=> {
        atributte += 1;
        
        if(atributte > 0){
            showAtributte.innerHTML = "+" + atributte;
        } else showAtributte.innerHTML = atributte
    });

    return atributte
}

const difficultyChoice = ()=> {
    
    const choiceButton = document.querySelectorAll('.difficulty-button');
    let wasChoce = false;
    let difficulty = "Normal";

    choiceButton.forEach(element => {
        element.addEventListener('click', ()=> {
            difficulty = element.id;
            if(wasChoce == false) {
                element.classList.add('difficulty-button-enabled');
                wasChoce = true;
            } else {
                choiceButton[0].classList.remove('difficulty-button-enabled');
                choiceButton[1].classList.remove('difficulty-button-enabled');
                choiceButton[2].classList.remove('difficulty-button-enabled');

                element.classList.add('difficulty-button-enabled');
            }
        })
    });

    return difficulty;
}

export default Options;