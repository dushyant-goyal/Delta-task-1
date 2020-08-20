var difficultyLevel;
function levelfunction()
{
  difficultyLevel=document.querySelector("#difficultyLevel").value;
   document.querySelector(".selectingDifficultyLevel").style.display="none";
   document.querySelector('.GameStartingButton').classList.remove("cssProp");;
}
function startTheGame()
{
    document.querySelector(".gameName").innerHTML="Tap the Next Button ";
  document.querySelector('.GameStartingButton').classList.add("cssProp");
  document.querySelector('.bestTimeDivision').classList.add("cssProp");
    var count=0.00;
    document.getElementById("userTime").innerHTML=count.toFixed(2);
    var gridSize=difficultyLevel*5+15;
    var limitOfNumber=gridSize+20;
    console.log(gridSize);
    for(let i=0;i<gridSize;i++)
    {
        var node=document.createElement("BUTTON");
      document.querySelector(".grid").appendChild(node);
      var myCurrentButton=document.querySelectorAll("button")[i+2];
      myCurrentButton.classList.add("button");
      myCurrentButton.classList.add("but"+(i+1));
      myCurrentButton.addEventListener("click",checkIfCorrectlyTapped);
      myCurrentButton.style.backgroundColor="#d2c6b2";
    }
    var toBePosted=[];
    for(let i=1;i<=gridSize;i++)
    {
       toBePosted.push(i);
    }
    console.log(limitOfNumber);
    for(let i=1;i<=gridSize;i++)
    {
      var idx=Math.floor(Math.random()*toBePosted.length);
      document.querySelector(".but"+i).innerHTML=toBePosted[idx];
      toBePosted.splice(idx,1);
    }
    var intervalTimer=setInterval(function()
  {
    count+=0.01;
    document.querySelector('#userTime').innerHTML=count.toFixed(2);
  },10);
    var toBeTapped=1;
    var newNumber=gridSize+1;
    function checkIfCorrectlyTapped()
    {
        console.log(this.innerHTML);
        if(this.innerHTML==toBeTapped )
        {
          if(newNumber<=limitOfNumber)
          {
               this.innerHTML=newNumber;
               newNumber++;
               toBeTapped++;
          }
          else
          {
               console.log("hide");
               this.innerHTML=null;
               toBeTapped++;
          }
        }
       if(toBeTapped>limitOfNumber)
       {
          endTheGame();
       }
    }
    function endTheGame()
    {
        console.log("nitin");
          document.querySelector('.bestTimeDivision').classList.remove("cssProp");
      for(let i=0;i<gridSize;i++)
      {
         let node=document.querySelector('.but'+(i+1));
         node.parentNode.removeChild(node);
      }
      clearInterval(intervalTimer);
      var userTime=document.getElementById('userTime');
      var bestTime=document.getElementById('s'+difficultyLevel+'LevelBestTime');
        document.querySelector(".gameName").innerHTML="your time taken is "+userTime.innerHTML;
      setTimeout(function()
    {
      document.querySelector(".gameName").innerHTML="Select the level,then press the start button to play again!";
      if(userTime.innerHTML<=bestTime.innerHTML || bestTime.innerHTML=="0.00")
      {
              bestTime.innerHTML=userTime.innerHTML;
      }
    },2000);
    document.querySelector(".selectingDifficultyLevel").style.display="inline";
    }
}
