//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
const stringToArray = inputString => inputString.split(/[ ,]+/);

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
const DNAtoRNA = dna => dna.replace(/T/g, "U");

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const minValue = list => Math.min(...list);
const maxValue = list => Math.max(...list);

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
const min = (arr, toReturn) => {
    const minValue = Math.min(...arr);
    if (toReturn === "index") {
      return arr.indexOf(minValue);
    } else if (toReturn === "value") {
      return Math.min(minValue);
    }
}

//ADDITIONAL
//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
const warnTheSheep = queue => {
    const reverseQueue = queue.reverse();
    const indexOfWolf = reverseQueue.indexOf("wolf");
    if (indexOfWolf === 0) {
      return "Pls go away and stop eating my sheep";
    } else {
      return `Oi! Sheep number ${indexOfWolf}! You are about to be eaten by a wolf!`
    }
}

//https://www.codewars.com/kata/beginner-lost-without-a-map
const maps = x => x.map(value => value * 2);

//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
const firstNonConsecutive = arr => {
    let previousNumber = arr[0];
    let deviantElement;
    for (let i = 1; i < arr.length; i++) {
      if ((previousNumber + 1) !== arr[i]) {
        deviantElement = arr[i];
        break;
      }
      previousNumber++;
    }
    return deviantElement !== undefined ? deviantElement : null;
}
