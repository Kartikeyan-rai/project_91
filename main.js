var player1=localStorage.getItem("user1");
var player2=localStorage.getItem("user2");
var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=player1+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_name").innerHTML=player2+":";
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn - "+player1;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2;
function send(){
    getword1=document.getElementById("number1").value;
    getword2=document.getElementById("number2").value;
    question=getword1+"X"+getword2;
    question1="<h4 id='word_display'>Q. "+question+"</h4>";
    input_box="<br>Answer :<input id='input_check_box' type='text'>";
    button="<br><br><button id='check'class='btn btn-info'onclick='check()'>Check</button>";
    row=question1+input_box+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}