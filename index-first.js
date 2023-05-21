//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
const makeNegative = (num) => {
    const negative = (num >= 0) ? -num : num;
    return negative;
}

//https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
const move = (position, roll) => {
    const newPosition = position + roll * 2;
    return newPosition;
}

//https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
const greet = (name, owner) => {
    const greeting = (name == owner) ? 'Hello boss' : 'Hello guest';
    return greeting;
}

//https://www.codewars.com/kata/keep-hydrated-1/train/javascript
const litres = (time) => {
    const waterUsage = 0.5;
    const waterTaken = Math.floor(time * waterUsage);
    return waterTaken;
}

//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
const lovefunc = (flower1, flower2) => {
    if (flower1 % 2 === 0 && flower2 % 2 !== 0){
      return true;   
    } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
      return true;
    }
    return false;
}