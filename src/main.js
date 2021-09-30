import Options from "./options.js"

let inUse = false;
let listKeeper;

const dice = document.querySelectorAll('[data-button]');
const liDice = document.querySelectorAll('[data-die]');

dice.forEach(element => {
    element.addEventListener('click', ()=> {
        if(inUse == false) {
            changeToOptions(element);   
        } else {
            const optionsList = document.getElementsByClassName('options-dice')[0];
            const dieItem = optionsList.parentElement;

            dieItem.removeChild(optionsList);
            dieItem.style.backgroundColor = "#444444";
            dieItem.style.borderColor = "#171717";

            dieItem.innerHTML = listKeeper;
			listKeeper = "";

            changeToOptions(element);
        }
    })
});

const changeToOptions = (element)=> {
    inUse = true;
    listKeeper = element.parentElement.innerHTML;

    const listMap = parseInt(element.parentElement.id);
    console.log(listKeeper);

    liDice[listMap].style.backgroundColor = "#171717";
    liDice[listMap].style.borderColor = "black";
    
    Options(parseInt(element.id), element);      
}