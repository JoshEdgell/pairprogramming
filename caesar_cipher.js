const caesar = function(message, codeword) {
  //Tell the function how to use the codeword (pair it with positions in the alphabet)
  //Apply those positions to the message
  //We'll get errors because the case won't be preserved, but we can fix those

  //a = 1, b = 2, c = 3...
  // String.charCodeAt(i);
  // Create an array
  let moves = [];
  // Push letter positions into the moves array
  for (let i = 97; i < 123; i++) {
    moves.push(i);
  }
  //Iterate through the codeword
  //The first character of 'codeword' is assigned to
  // j tells t how many to move forward
  //iterate through the message

  //In 'codeword,' spit out first character's position


  // console.log( codeword.charCodeAt(i) - 96 );
  //.charCodeAt() gives us the ASCII position
  //" - 96" subtracts to shift the ASCII postion back to the ALPHABET position

  // moves.somemethod(codeword[0])

  // 'codeArray' is going to be the number of moves for each character in 'codeword'
  let codeArray = [];
  //Iterate through 'codeword'
  for (let i = 0; i < codeword.length; i++) {
    codeArray[i] = codeword.charCodeAt(i) - 96;
  }


  //Iterate through the 'message'
  //Apply the letter shifts from 'codeArray'
  for (let i = 0; i < message.length; i++) {
    //When i = 0, 't' + 'j'
    // message[i] = String.fromCharCode(message.charCodeAt(i) + codeArray[i]);
    message.slice(i,1,(String.fromCharCode(message.charCodeAt(i) + codeArray[i])))
    console.log(message[i]);
  }

  // console.log(message[0]);   // 't'
  // console.log(codeArray[0]); // 10
  // console.log(message[0] + codeArray[0]); // t10


  return 'finished';
}

//                        1
//              012345678901234567
const phrase = 'taco cat is hungry';
//              01234
const secret = 'jamie';

console.log(caesar(phrase, secret));
