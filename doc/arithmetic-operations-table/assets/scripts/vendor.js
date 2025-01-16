const userInput1 = document.getElementById('input-number1');
const userInput2=document.getElementById('input-number2');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

addBtn.addEventListener("click",()=>{
  debugger
  console.log("triggered");
  console.log(userInput1.value);
  
  let result=Number(userInput1.value)+Number(userInput2.value)
  currentResultOutput.innerHTML=result;
  currentCalculationOutput.innerHTML=`${Number(userInput1.value)}+${Number(userInput2.value)}`;
})
subtractBtn.addEventListener("click",()=>{
  debugger

  
  let result=Number(userInput1.value)-Number(userInput2.value)
  currentResultOutput.innerHTML=result;
  currentCalculationOutput.innerHTML=`${Number(userInput1.value)}-${Number(userInput2.value)}`;
})
multiplyBtn.addEventListener("click",()=>{
  debugger
  
  
  let result=Number(userInput1.value)*Number(userInput2.value)
  currentResultOutput.innerHTML=result;
  currentCalculationOutput.innerHTML=`${Number(userInput1.value)}*${Number(userInput2.value)}`;
})
divideBtn.addEventListener("click",()=>{
  debugger
 
  
  let result=Number(userInput1.value)/Number(userInput2.value)
  currentResultOutput.innerHTML=result;
  currentCalculationOutput.innerHTML=`${Number(userInput1.value)}/${Number(userInput2.value)}`;
})
