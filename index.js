module.exports = function guessAge(number, boolean, year) {
  console.log(
    "number between 2 and 10:",
    number,
    "celebrated birthday this year:",
    boolean,
    "birthyear:",
    year
  );

  if (number > 10 || number < 2) {
    console.log("number must be between 2 and 10");
  } else {
    let numByTwo = number * 2;

    console.log(`${number} * 2 = ${numByTwo}`)

    let numPlusFive = numByTwo + 5;

    console.log(`${numByTwo} + 5 = ${numPlusFive}`)

    let numByFifty = numPlusFive * 50;

    console.log(`${numPlusFive} * 50 = ${numByFifty}`)
  
    if (boolean === true) {
      nextNumber = numByFifty + 1771

      console.log(`${numByFifty} + 1771 = ${nextNumber}`)

    }
    if (boolean === false) {
      nextNumber = numByFifty + 1770

      console.log(`${numByFifty} + 1770 = ${nextNumber}`)
    }
  
    let numberMinusYear = nextNumber - year;
  
    (ageArray = []), (string = numberMinusYear.toString());
  
    console.log(`${nextNumber} - ${year} = ${numberMinusYear}`)

    for (var i = 0, len = string.length; i < len; i += 1) {
      ageArray.push(+string.charAt(i));
    }
  
    let newArray = [];
  
    newArray.push(ageArray[1]);
    newArray.push(ageArray[2]);
  
    let age = `${ageArray[1]}` + `${ageArray[2]}`;
  
    console.log("guessed age:", age);
  
    return age
  }
}

