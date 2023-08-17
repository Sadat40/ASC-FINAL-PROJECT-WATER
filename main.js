let question= document.getElementById("question");
let buttons=document.querySelectorAll('#answer');
let button1=buttons[0];
let button2=buttons[1];
let button3=buttons[2];
let button4=buttons[3];

let button5=buttons[4];
let button6=buttons[5];
let button7=buttons[6];
let button8=buttons[7];

let button9=buttons[8];
let button10=buttons[9];
let button11=buttons[10];
let button12=buttons[11];

let button13=buttons[12];
let button14=buttons[13];
let button15=buttons[14];
let button16=buttons[15];

let button17=buttons[16];
let button18=buttons[17];
let button19=buttons[18];
let button20=buttons[19];

let q1clicked=false;

let q2clicked=false;

let q3clicked=false;
let q4clicked=false;
let q5clicked=false;

let score=0;

let para=document.getElementById("comment");


button1.onclick = function(){
    if (!q1clicked){
      q1clicked=true;
      button1.style.backgroundColor="red";
      button2.style.backgroundColor="red";
      button3.style.backgroundColor="green";
      button4.style.backgroundColor="red";
    }
}


button2.onclick = function(){
  if (!q1clicked){
    q1clicked=true;
    button1.style.backgroundColor="red";
    button2.style.backgroundColor="red";
    button3.style.backgroundColor="green";
    button4.style.backgroundColor="red";
  }
}

button3.onclick = function(){
  if (!q1clicked){
    q1clicked=true;
    button1.style.backgroundColor="red";
    button2.style.backgroundColor="red";
    button3.style.backgroundColor="green";
    button4.style.backgroundColor="red";
    score++;
  }
}

button4.onclick = function(){
  if (!q1clicked){
    q1clicked=true;
    button1.style.backgroundColor="red";
    button2.style.backgroundColor="red";
    button3.style.backgroundColor="green";
    button4.style.backgroundColor="red";
  }
}

button5.onclick = function(){
  if (!q2clicked){
    q2clicked=true;
    button5.style.backgroundColor="red";
    button6.style.backgroundColor="green";
    button7.style.backgroundColor="red";
    button8.style.backgroundColor="red";
  }
}


button6.onclick = function(){
  if (!q2clicked){
    q2clicked=true;
    button5.style.backgroundColor="red";
    button6.style.backgroundColor="green";
    button7.style.backgroundColor="red";
    button8.style.backgroundColor="red";
    score++;
  }
}

button7.onclick = function(){
  if (!q2clicked){
    q2clicked=true;
    button5.style.backgroundColor="red";
    button6.style.backgroundColor="green";
    button7.style.backgroundColor="red";
    button8.style.backgroundColor="red";
  }
}

button8.onclick = function(){
  if (!q2clicked){
    q2clicked=true;
    button5.style.backgroundColor="red";
    button6.style.backgroundColor="green";
    button7.style.backgroundColor="red";
    button8.style.backgroundColor="red";
  }
}

button9.onclick = function(){
  if (!q3clicked){
    q3clicked=true;
    button9.style.backgroundColor="red";
    button10.style.backgroundColor="green";
    button11.style.backgroundColor="red";
    button12.style.backgroundColor="red";
  }
}


button10.onclick = function(){
  if (!q3clicked){
    q3clicked=true;
    button9.style.backgroundColor="red";
    button10.style.backgroundColor="green";
    button11.style.backgroundColor="red";
    button12.style.backgroundColor="red";
    score++;
  }
}

button11.onclick = function(){
  if (!q3clicked){
    q3clicked=true;
    button9.style.backgroundColor="red";
    button10.style.backgroundColor="green";
    button11.style.backgroundColor="red";
    button12.style.backgroundColor="red";
    score++;
  }
}

button12.onclick = function(){
  if (!q3clicked){
    q3clicked=true;
    button9.style.backgroundColor="red";
    button10.style.backgroundColor="green";
    button11.style.backgroundColor="red";
    button12.style.backgroundColor="red";
  }
}

button13.onclick = function(){
  if (!q4clicked){
    q4clicked=true;
    button13.style.backgroundColor="red";
    button14.style.backgroundColor="red";
    button15.style.backgroundColor="green";
    button16.style.backgroundColor="red";
  }
}


button14.onclick = function(){
  if (!q4clicked){
    q4clicked=true;
    button13.style.backgroundColor="red";
    button14.style.backgroundColor="red";
    button15.style.backgroundColor="green";
    button16.style.backgroundColor="red";
  }
}

button15.onclick = function(){
  if (!q4clicked){
    q4clicked=true;
    button13.style.backgroundColor="red";
    button14.style.backgroundColor="red";
    button15.style.backgroundColor="green";
    button16.style.backgroundColor="red";
    score++;
  }
}

button16.onclick = function(){
  if (!q4clicked){
    q4clicked=true;
    button13.style.backgroundColor="red";
    button14.style.backgroundColor="red";
    button15.style.backgroundColor="green";
    button16.style.backgroundColor="red";
  }
}

button17.onclick = function(){
  if (!q5clicked){
    q5clicked=true;
    button17.style.backgroundColor="red";
    button18.style.backgroundColor="red";
    button19.style.backgroundColor="red";
    button20.style.backgroundColor="green";
  }
}


button18.onclick = function(){
  if (!q5clicked){
    q5clicked=true;
    button17.style.backgroundColor="red";
    button18.style.backgroundColor="red";
    button19.style.backgroundColor="red";
    button20.style.backgroundColor="green";
  }
}

button19.onclick = function(){
  if (!q5clicked){
    q5clicked=true;
    button17.style.backgroundColor="red";
    button18.style.backgroundColor="red";
    button19.style.backgroundColor="red";
    button20.style.backgroundColor="green";
  }
}

button20.onclick = function(){
  if (!q5clicked){
    q5clicked=true;
    button17.style.backgroundColor="red";
    button18.style.backgroundColor="red";
    button19.style.backgroundColor="red";
    button20.style.backgroundColor="green";
    score++;
  }
}
if (q1clicked&&q2clicked&&q3clicked&&q4clicked&&q5clicked){
  para.innerHTML="You are done with the quiz! You received a" + score + "/5!";
}