onst input = "jackie is the best";

const vowels = ['a', 'e', 'i', 'o', 'u']; 

let resultArray = [];

for(let i = 0; i < input.length; i++)
  {
  // if(input[i] === 'e'){
  //   resultArray.push(input[i]);
  // }
  // if(input[i] === 'u'){
  //   resultArray.push(input[i]);
  // }
 
  // console.log(`i is ${i}`)
  for(let k = 0; k < vowels.length; k++)
  {
    if(input[i]===vowels[k])
    {
      // console.log(input[i])
     resultArray.push(input[i]);
    //  console.log(resultArray);
    }  
    // console.log(`k is ${k}`)
  }
}

// console.log(resultArray)
const resultString = resultArray.join('').toUpperCase(); 
console.log(resultString)
