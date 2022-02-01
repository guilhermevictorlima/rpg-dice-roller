import { difficulties } from "./difficulties.js";

const rollOptions = (dieValue, dieElement)=> {

    dieElement.parentElement.innerHTML = optionsContent(dieValue);

    const atributte = attributeChoice();

    let difficulty = difficultyChoice();

    const rollButton = document.querySelector('[data-roll-button]');

    rollButton.addEventListener('click', ()=> {
        
        const quantity = parseInt(document.querySelector('[data-amount]').value);

        if(quantity <= 0) {

            alert('Please enter a valid number...');
            document.querySelector('[data-amount]').value = 1;
        
		} else {
            //roll(value, quantity, atributte, difficulty)
            console.log('Funcionou! ' + quantity)
        }
    })
}

const optionsContent = (value)=> {
    return `
    		<div class="options-dice">
				<h3>Choose how many dice</h3>
				
				<input type="number" data-amount class="amount-dice" value="1">
				<p class="amount-p">d${value}</p>
				
				<h3>Attributes</h3>
				<div class="dice-attributes">
					<button data-minus id="-1">-</button>
					<p data-result-attribute>0</p>
					<button data-plus id="1">+</button>
				</div>
				<p>Advantages or disadvantages</p>
				
				<h3>Difficulty</h3>
				
				<button class="difficulty-button" id="EASY">Easy</button>
				<button class="difficulty-button" id="NORMAL">Normal</button>
				<button class="difficulty-button" id="HARD">Hard</button><br>
				
				<input type="submit" value="Roll!" class="roll-dice" data-roll-button>
			</div>

    		`
}

const attributeChoice = ()=> {

    let attribute = 0;

	const buttons = [
		document.querySelector('[data-minus]'),
		document.querySelector('[data-plus]')
	];

    const resultAttribute = document.querySelector('[data-result-attribute]');

	buttons.forEach(button => {
		button.addEventListener('click', ()=> {
			attribute += parseInt(button.id);

			attribute > 0
				? resultAttribute.innerHTML = `+${attribute}`
				: resultAttribute.innerHTML = attribute;
		})
	});

    return attribute;
}

const difficultyChoice = ()=> {
    
    const choiceButton = document.querySelectorAll('.difficulty-button');

    let wasChoce = false;
    let difficulty = difficulties.NORMAL;

    choiceButton.forEach(button => {
        button.addEventListener('click', ()=> {
            difficulty = button.id;
            
			!wasChoce
				? wasChoce = true
				: choiceButton.forEach(choiceBtn => 
					choiceBtn.classList.remove('difficulty-button-enabled'));
			
			button.classList.add('difficulty-button-enabled');
        })
    });

    return difficulty;
}

export default rollOptions;