class Game {

    // a function that is going to be called any time that we create an object via class
    
    constructor(){

        // get all the possible screens
        // game-screen, game-end, game-win are initially hidden
        this.startScreen = document.getElementById('game-info');
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end')
        this.gameWinScreen = document.getElementById('game-win')
        this.backScreen = document.getElementsByTagName("body")
        
        

        // player
        this.player = new Player(
            this.gameScreen, 700, 750, 60, 85, "docs/images/turtle.png"
        );

        // style for the game board

        this.width = 1400
        this.height = 800

        // obstacles
        this.obstacles = []
        this.seagulls = []
        this.dogs = []
        this.cats = []
        this.trashes = []
        this.cups2 = []
        this.trashes2=[]
        this.bstars = []
        this.rstars = []
        this.nets = []

        // flag to give info about pushing an obstacle
        this.isPushingSeagull = false
        this.isPushingObstacle = false
        this.isPushingDog = false
        this.isPushingCat = false
        this.isPushingTrash = false
        this.isPushingCup2 = false
        this.isPushingTrash2 = false
        this.isPushingBstar = false
        this.isPushingRstar = false
        this.isPushingNet = false
        

        // timer
        this.timer = 30;

        // lives
        this.lives = 3;

        // gameOver flag
        this.gameOver = false;

        // Sound Effects for Obstacles

        this.starAudio = new Audio("./docs/audio/star-sound.mp3")
        this.bossAudio = new Audio("./docs/audio/bossBaby-sound.mp3")
        this.catAudio = new Audio("./docs/audio/cat-sound.mp3")
        this.dogAudio = new Audio("./docs/audio/dog-sound.mp3")
        this.obstAudio = new Audio("./docs/audio/obstacle.mp3")
    
    }

     

    start() {

        // Set the height and width of the game screen
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`

        // Hide the start Scren
        this.startScreen.style.display = 'none';

        //Show the Game Screen

        this.gameScreen.style.display = 'block'

        // Add background music

        this.backgroundMusic = document.createElement('audio');
        this.backgroundMusic.src = "./docs/audio/gametrack.mp3"
        this.gameScreen.appendChild(this.backgroundMusic)
        this.backgroundMusic.play()

        //Set the timer for the game

        setInterval(()=>{
            return this.timer--
        }, 1000)

        //Start the Game Loop
        this.gameLoop()
    }

    //Creating Game Loop
    gameLoop(){
        console.log('Game Loop')

        //Check if the game's over to interrrups the game loop
        if(this.gameIsOver){
            return;
        }

        this.update()

     

    window.requestAnimationFrame(()=>this.gameLoop())

    } 

    update(){

       // scores and lives

        let timer = document.getElementById('timer')
        let lives = document.getElementById('lives')

       

        timer.innerHTML = this.timer
        lives.innerHTML = this.lives

        //condition for game over 

        if(this.lives <= 0 || this.timer <= 0) {
            this.bossAudio.play()
            this.endGame()
        } 
        //condition for winning

        else if (this.player.top < 35) {
            this.starAudio.play()
            this.winGame()
        }

        this.player.move()

        // Check for collision and if an obstacle is still on the screen (BossBaby)
        for (let i=0; i < this.obstacles.length; i++){
            const obstacle = this.obstacles[i]
            obstacle.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(obstacle)){
                //remove the obstacle from the DOM
                obstacle.element.remove()     

                //remove obstacle from the array
                this.obstacles.splice(i,1)

                //collision sound effect 
                this.bossAudio.play()

                //reduce player's live by 1
                this.lives --
                

            }

            //Check if the obstacle is off the screen (on the right)

            else if(obstacle.left > this.width) {
                obstacle.element.remove()
                this.obstacles.splice(i, 1)

            } 

       

        }

        //Dog obstacle

        for (let i=0; i < this.dogs.length; i++){
            const dog = this.dogs[i]
            dog.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(dog)){
                //remove the obstacle from the DOM
                dog.element.remove()     

                //remove obstacle from the array
                this.dogs.splice(i,1)

                //collision sound effect
                this.dogAudio.play()

                //reduce player's live by 1
                this.lives --
             
            //Check if the obstacle is off the screen (on the left)    
 
            } else if(dog.right > this.width){
                dog.element.remove()
                this.dogs.splice(i, 1)

            }

        }  

        //cat obstacle

        for (let i=0; i < this.cats.length; i++){
            const cat = this.cats[i]
            cat.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(cat)){
                //remove the obstacle from the DOM
                cat.element.remove()     

                //remove obstacle from the array
                this.cats.splice(i,1)

                //collision sound effect
                this.catAudio.play()

                //reduce player's live by 1
                this.lives --
                
            //Check if the obstacle is off the screen (on the left)  

            } else if(cat.right > this.width){
                cat.element.remove()
                this.cats.splice(i, 1)

            }

        }  

        //cup obstacle

        for (let i=0; i < this.cups2.length; i++){
            const cup2 = this.cups2[i]
           // cup2.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(cup2)){
                //remove the obstacle from the DOM
                cup2.element.remove()     

                //remove obstacle from the array
                this.cups2.splice(i,1)

                //reduce player's live by 1
                this.obstAudio.play()
                this.lives --
                
 
            } 

        }  

        for (let i=0; i < this.trashes.length; i++){
            const trash = this.trashes[i]
          //  trash.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(trash)){
                //remove the obstacle from the DOM
                trash.element.remove()     

                //remove obstacle from the array
                this.trashes.splice(i, 1)

                //reduce player's live by 1
                this.obstAudio.play()
                this.lives --
                
 
            } 

        }  
        for (let i=0; i < this.trashes2.length; i++){
            const trash2 = this.trashes2[i]
           // trash2.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(trash2)){
                //remove the obstacle from the DOM
                 trash2.element.remove()     

                //remove obstacle from the array
                 this.trashes2.splice(i, 1)

                //reduce player's live by 1
                 this.obstAudio.play()
                 this.lives --
                    
            } 

        }  

        for (let i=0; i < this.bstars.length; i++){
            const bStar = this.bstars[i]
            bStar.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(bStar)){
                //remove the obstacle from the DOM
                
                
                bStar.element.remove()     

                //remove obstacle from the array
                this.bstars.splice(i,1)

                //increase player's time by 3 seconds
                this.starAudio.play()
                this.timer+=3
                
 
            } else if(bStar.top > this.height){
                bStar.element.remove()
                this.bstars.splice(i, 1)

            }

        } 

        //Update Obstacles
        if(!this.obstacles.length && !this.isPushingObstacle) {
            this.isPushingObstacle = true;
            setTimeout(()=>{
                this.obstacles.push(new Obstacle(this.gameScreen))
                this.isPushingObstacle = false
            }, 100)
        }

        if(!this.dogs.length && !this.isPushingDog) {
            this.isPushingDog = true;
            setTimeout(()=>{
                this.dogs.push(new Dog(this.gameScreen))
                this.isPushingDog = false
            }, 100)
        }

        if(!this.cats.length && !this.isPushingCat) {
            this.isPushingCat = true;
            setTimeout(()=>{
                this.cats.push(new Cat(this.gameScreen))
                this.isPushingCat = false
            }, 200)
        }

        if(!this.cups2.length && !this.isPushingCup2) {
            this.isPushingCup2 = true;

            this.cups2.push(new Cup(this.gameScreen))
            this.cups2.push(new Cup(this.gameScreen))
            this.cups2.push(new Cup(this.gameScreen))
            this.isPushingCup2 = false
            
        }


       if(!this.trashes.length && !this.isPushingTrash) {
            this.isPushingTrash = true;
            
            this.trashes.push(new Trash(this.gameScreen))
            this.trashes.push(new Trash(this.gameScreen))
            this.trashes.push(new Trash(this.gameScreen))
            this.isPushingTrash = false
            
        } 

        if(!this.trashes2.length && !this.isPushingTrash2) {
            this.isPushingTrash2 = true;
            this.trashes2.push(new Trash2(this.gameScreen))
            this.trashes2.push(new Trash2(this.gameScreen))
            this.trashes2.push(new Trash2(this.gameScreen))
            this.isPushingTrash2 = false
            
        } 

        if(!this.bstars.length && !this.isPushingBstar) {
            this.isPushingBstar = true;
            setTimeout(()=>{
                this.bstars.push(new StarBlue(this.gameScreen))
                this.isPushingBstar = false
            }, 7000)
        }

    }
    endGame(){
        //remove player
        this.player.element.remove()


        this.gameIsOver = true

        //hide the game screen

        this.gameScreen.style.display = 'none'

        //Show end game screen
        
        this.gameEndScreen.style.display = "block"
    }

    winGame(){
        //remove player
        this.player.element.remove()

        this.gameIsOver = true

        //hide the game screen

        this.gameScreen.style.display = 'none'

        //Show end game screen
        
        this.gameWinScreen.style.display = "block"
    }

} 

