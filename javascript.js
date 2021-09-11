function whoWin(p1,p2){
    if(p1===p2){
         document.getElementById('heading').innerHTML = "Match Draw!";
    }else if (p1 > p2){
        document.getElementById('heading').innerHTML = "🎉Player 1🏆 Wins!";
    }else{
        document.getElementById('heading').innerHTML = "Player 2 🏆Wins!🎉";
    }
}


function changeImg1(p1){
    if(p1===1){
        document.getElementById('player-1-img').src ="images/dice1.png";
    }else if(p1===2){
        document.getElementById('player-1-img').src ="images/dice2.png";
    }else if(p1===3){
        document.getElementById('player-1-img').src ="images/dice3.png";
    }
    else if(p1===4){
        document.getElementById('player-1-img').src ="images/dice4.png";
    }else if(p1===5){
        document.getElementById('player-1-img').src ="images/dice5.png";
    }else{
        document.getElementById('player-1-img').src ="images/dice6.png";
    }
}
function changeImg2(p2){
  if(p2===1){
      document.getElementById('player-2-img').src ="images/dice1.png";
  }else if(p2===2){
      document.getElementById('player-2-img').src ="images/dice2.png";
  }else if(p2===3){
      document.getElementById('player-2-img').src ="images/dice3.png";
  }
  else if(p2===4){
      document.getElementById('player-2-img').src ="images/dice4.png";
  }else if(p2===5){
      document.getElementById('player-2-img').src ="images/dice5.png";
  }else{
      document.getElementById('player-2-img').src ="images/dice6.png";
  }


}
function startGame(){
    var p1 = Math.floor(Math.random() * 6) +1;
    var p2 = Math.floor(Math.random() * 6) +1;
    whoWin(p1,p2);
    changeImg1(p1);
    changeImg2(p2);
}
