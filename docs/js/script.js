window.onload = function () {
    
    const hardButton = document.getElementById("hard")
    const easyButton = document.getElementById("easy")
    const startButton = document.getElementById("start-button");
    const startHButton = document.getElementById("start-button-hard")
    const restartButton = document.getElementById("restart-button");
    const winButton = document.getElementById("win-button")
    easyButton.addEventListener('click', function() {
      document.getElementById('game-intro').style.display= 'none';
      document.getElementById('game-info').style.display = 'block';
      
    })
    hardButton.addEventListener("click", function(){
      document.getElementById('game-intro').style.display = 'none';
      document.getElementById("info-hard").style.display = 'block'
    })
  
    startButton.addEventListener("click", function () {
      startGame();
    });

    startHButton.addEventListener("click", function () {
      startGame2();
    });

  
    let game;
    
  
    restartButton.addEventListener('click', function(){
      location.reload()
    })
    winButton.addEventListener('click', function(){
      location.reload()
    })
   
  
   function startGame() {
      console.log("start game");
      game = new Game()
      game.start()
    }
    function startGame2() {
      console.log('start game');
      game = new Game2()
      game.start()
    }
      //Function that handles keydown events
      function handleKeydown(event){
        const key = event.key;
        const possibleKeystrokes = ['ArrowLeft', 'ArrowUp', 'ArrowRight']
       
        // Check if the pressed key belongs to the array of possible keys 
        if(possibleKeystrokes.includes(key)){
          //prevent the default key actions from happening
          // in this case, it's scroll-up/scroll-down/scroll-left/scroll-right
          //in the browser window
        
        event.preventDefault()
  
        //Only when we have a game loaded, we can move the player
  
        //Function for keydown events
  
        if(game){
          switch(key) {
            case "ArrowLeft":
             game.player.directionX = -1;
             break;
  
            case "ArrowUp":
              game.player.directionY = -1;
              break;
            
            case "ArrowRight":
              game.player.directionX = 1;
              break;  
  
          }
        }
  
      }  
       
    }
  
    //Function that handles keyup(releasing the key events)
  
    function handleKeyup(event){
      const key = event.key;
      const possibleKeystrokes = ['ArrowLeft', 'ArrowUp', 'ArrowRight']
     
      // Check if the pressed key belongs to the array of possible keys 
      if(possibleKeystrokes.includes(key)){
        //prevent the default key actions from happening
        // in this case, it's scroll-up/scroll-down/scroll-left/scroll-right
        //in the browser window
      
      event.preventDefault()
  
      //Only when we have a game loaded, we can move the player
  
      //Function for keydown events
  
      if(game){
        switch(key) {
          case "ArrowLeft":
           game.player.directionX = 0;
           break;
  
          case "ArrowUp":
            game.player.directionY = 0;
            break;
          
          case "ArrowRight":
            game.player.directionX = 0;
            break;
  
  
        }
      }
  
    }  
     
  }
  
  // Associate the handleKeydown function with an Event listener
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('keyup', handleKeyup)
      
  };