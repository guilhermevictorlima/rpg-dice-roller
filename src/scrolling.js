import ShowResult from "./result.js";

const roll = (value, quantity, atributte, difficulty)=> {

    if(quantity == "" || quantity == 0) {
        quantity = 1;
    }

	let result;

	const rolling = () => {
		result = Math.round(Math.random() * value);
		
		if(result == 0) {
			rolling();
		} else {
			ShowResult(result, value, quantity, atributte, difficulty);
		}
	}
}

export default roll