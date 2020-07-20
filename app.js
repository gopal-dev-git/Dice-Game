var roundscore,activeplayer,dice,real;

newgame();

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if(real){
    
    dice=Math.floor(Math.random()*Number(6))+Number(1); // algorithm for dice rolling
    
    var diceDOM=document.querySelector('.dice');
    
    diceDOM.style.display='block';
    
    diceDOM.src='dice-'+dice+'.png'; //displaying in image
    
     //displaying in current 
    
    if (dice !== Number(1)) //add to score to player
        {   
            roundscore+=dice;
            document.getElementById('current-'+activeplayer).textContent=roundscore;
        }
    
    else // move to another player
        {
        nextplayer();
        }   
}}); 

document.querySelector('.btn-hold').addEventListener('click',function() {
    
        if (real){
    
        score[activeplayer] += roundscore;
    
  
        document.querySelector('#score-' + activeplayer).textContent=score[activeplayer];
        
        if(activeplayer==Number(0))
              {
        document.querySelector('.player-0-panel').classList.add('active');
                  
        document.querySelector('.player-1-panel').classList.remove('active');
              }
        if(activeplayer==Number(1))
              {
        document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.player-0-panel').classList.remove('active');
              }
        
        if(score[activeplayer]>=Number(50)) //if player reached 100
                {
                score=Number(0);
                document.querySelector('#name-'+activeplayer).textContent='WINNER!';
                real=false;
                 }
        else
            nextplayer();
}});

function nextplayer()
    {
        (activeplayer==Number(0) ? activeplayer = Number(1) : activeplayer = Number(0));
        
        roundscore=Number(0); 
            
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';  // makes the current 0 if 1 appears
          if(activeplayer==Number(0))
              {
        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('.player-1-panel').classList.remove('active');
              }
        if(activeplayer==Number(1))
              {
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
              }
        
        
    // makes the backround active for the current player
        document.querySelector('.dice').style.display='none'; 
    }


    document.querySelector('.btn-new').addEventListener('click',newgame);


        
function newgame(){

//Event Handling
        real=true;
        roundscore=0;
        activeplayer=0;
        score=[0,0];
            // initialising the variables to 0
    document.querySelector('.dice').style.display='none'; //inner css
    document.getElementById('current-0').textContent='0'; 
    document.getElementById('current-1').textContent='0';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('#name-0').textContent='PLAYER-1';
    document.querySelector('#name-1').textContent='PLAYER-2';

 
}














