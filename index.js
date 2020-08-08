const message =document.querySelector('.message');
const serving =document.querySelector('.serving');
const currentline =document.querySelector('.currentline');


let katzDeliLine = []; //this variable has to be declared outside the function

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    console.log(katzDeliLine);
  return message.innerHTML = `Welcome ${name}. You are number ${katzDeliLine.length} in line`;
    }


function nowServing(katzDeliLine) {
    let servingMessage = katzDeliLine.length == 0 ? 
    "There is nobody waiting to be served!" :
        "Currently serving " + katzDeliLine.shift();
    return serving.innerHTML = servingMessage;
  }

  function currentLine(katzDeliLine) {
    let line = [];
    for (let i=0; i<katzDeliLine.length; i++) {
        line += (i + 1) + ". " + katzDeliLine[i] + ", ";
    } //for loop needs to be closed here
        line = line.slice(0, -2); //-2 in order to remove a space and a coma from the end
        let current = katzDeliLine.length == 0 ? 
        "There is nobody waiting to be served!" :        
            'The line is currently: ' + line  
        return currentline.innerHTML = current;
  }




console.log(takeANumber(katzDeliLine, "Alexandra")); 
console.log(takeANumber(katzDeliLine, "Yasmina"));
console.log(takeANumber(katzDeliLine, "Kent"));
console.log(takeANumber(katzDeliLine, "Clark"))
console.log(takeANumber(katzDeliLine, "Debbie"))
console.log(nowServing(katzDeliLine));
// console.log(nowServing(katzDeliLine));
console.log(currentLine(katzDeliLine));