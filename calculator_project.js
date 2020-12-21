
var displayValue="0";
var pendingValue;
var evalStringArray=[];

function allClear(){
 evalStringArray=[];
 displayValue="0";
  document.getElementById("display_name").innerHTML=displayValue;

}
function inputZero(){
  if(displayValue==="0"){
    displayValue=""
  }
   displayValue +="0";
   document.getElementById("display_name").innerHTML= displayValue;
}

function inputOne(){
  if(displayValue==="0"){
    displayValue=""
  }
   displayValue +="1";
   document.getElementById("display_name").innerHTML= displayValue;
}

function inputTwo(){
  if(displayValue==="0"){
    displayValue=""
  }
   displayValue +="2";
   document.getElementById("display_name").innerHTML= displayValue;
}

function inputThree(){
  if(displayValue==="0"){
    displayValue=""
  }
   displayValue +="3";
   document.getElementById("display_name").innerHTML= displayValue;
}

function inputFour(){
  if(displayValue==="0"){
    displayValue=""
  }
   displayValue +="4";
   document.getElementById("display_name").innerHTML= displayValue;
}

function inputFive(){
  if(displayValue==="0"){
    displayValue=""
  }
   displayValue +="5";
   document.getElementById("display_name").innerHTML= displayValue;
}

function inputSix(){
  if(displayValue==="0"){
    displayValue=""
  }
   displayValue +="6";
   document.getElementById("display_name").innerHTML= displayValue;
}

function inputSeven(){
  if(displayValue==="0"){
    displayValue=""
  }
   displayValue +="7";
   document.getElementById("display_name").innerHTML= displayValue;
}

function inputEight(){
  if(displayValue==="0"){
    displayValue=""
  }
   displayValue +="8";
   document.getElementById("display_name").innerHTML= displayValue;
}

function inputNine(){
  if(displayValue==="0"){
    displayValue=""
  }
   displayValue +="9";
   document.getElementById("display_name").innerHTML= displayValue;
}

function addValue(){
  pendingValue=displayValue;
  displayValue="0";
  evalStringArray.push(pendingValue);
  evalStringArray.push("+");
  var newStr=evalStringArray.join("")
  document.getElementById("display_name").innerHTML= newStr;
}

function minusValue(){
  pendingValue=displayValue;
  displayValue="0";
  evalStringArray.push(pendingValue);
  evalStringArray.push("-");
  var newStr=evalStringArray.join("")
  document.getElementById("display_name").innerHTML= newStr;
}

function timesValue(){
  pendingValue=displayValue;
  displayValue="0";
  evalStringArray.push(pendingValue);
  evalStringArray.push("*");
  var newStr=evalStringArray.join("")
  document.getElementById("display_name").innerHTML= newStr;
}

function divideValue(){
  pendingValue=displayValue;
  displayValue="0";
  evalStringArray.push(pendingValue);
  evalStringArray.push("/");
  var newStr=evalStringArray.join("")
  document.getElementById("display_name").innerHTML= newStr;
}

function inputEquals(){
  evalStringArray.push(displayValue);
    var solution=eval(evalStringArray.join(""));
  displayValue=solution ;
 document.getElementById("display_name").innerHTML=displayValue;
  evalStringArray=[];
}

function inputDecimal(){
  if(!displayValue.includes(".")){
    displayValue+=".";
  }
document.getElementById("display_name").innerHTML=displayValue;

}
