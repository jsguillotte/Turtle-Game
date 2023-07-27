class Game2 {
    // a function that is going to be called any time that we create an object via class

    // it's useful to store all the properties that belong to the future object.
    constructor(){
        // get all the possible screens
        // game-screen and game-end are initially hidden
        this.startScreen = document.getElementById('info-hard');
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end')
        this.gameWinScreen = document.getElementById('game-win')

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

        //collision sound effects

        this.starAudio = new Audio("./docs/audio/star-sound.mp3")
        this.starRedAudio = new Audio("./docs/audio/star-sound.mp3")
        this.bossAudio = new Audio("./docs/audio/bossBaby-sound.mp3")
        this.catAudio = new Audio("./docs/audio/cat-sound.mp3")
        this.dogAudio = new Audio("./docs/audio/dog-sound.mp3")
        this.birdAudio = new Audio("./docs/audio/seagull-sound.mp3")
        this.obstAudio = new Audio("./docs/audio/obstacle.mp3")
        this.netAudio = new Audio("./docs/audio/net-sound.wav")
    
    }

    start() {
        // Set the height and width of the game screen
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`

        // Hide the start Scren
        this.startScreen.style.display = 'none';

        //Show the Game Screen

        this.gameScreen.style.display = 'block'

        //set timer for the game 

        setInterval(()=>{
            return this.timer--
        }, 1000)

        //background music

        this.backgroundMusic = document.createElement('audio');
        this.backgroundMusic.src = "./docs/audio/gametrack.mp3"
        this.gameScreen.appendChild(this.backgroundMusic)
        this.backgroundMusic.play()

        //Start the Game Loop
        this.gameLoop()
    }

    //Creating an Game Loop function
    gameLoop(){
        console.log('Game Loop')

        //Check if the game's over to interrrupt the game loop
        if(this.gameIsOver){
            return;
        }

        this.update()

    window.requestAnimationFrame(()=>this.gameLoop())

    } 

    update(){
        //timer and lives

        let timer = document.getElementById('timer')
        let lives = document.getElementById('lives')

        timer.innerHTML = this.timer
        lives.innerHTML = this.lives

        //condidition for losing

        if(this.lives === 0 || this.timer <= 0) {
            this.bossAudio.play()
            this.endGame()


        //condition for winning

        } else if (this.player.top < 35) {
            this.starAudio.play()
            this.winGame()
        }

        this.player.move()

        //obstacle baby boss
        // Check for collision and if an obstacle is still on the screen
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

        //obstacle seagull

       for (let i=0; i < this.seagulls.length; i++){
            const seagull = this.seagulls[i]
            seagull.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(seagull)){
                //remove the obstacle from the DOM
                seagull.element.remove()     

                //remove obstacle from the array
                this.seagulls.splice(i,1)

                //collision sound effect
                this.birdAudio.play()

                //reduce player's live by 1
                this.lives --
                
            //Check if the obstacle is off the screen (on the bottom)

            } else if(seagull.top > this.height){
                seagull.element.remove()
                this.seagulls.splice(i, 1)

            }

        }    

        //obstacle dog
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

                //cat sound effect
                this.catAudio.play()
                //reduce player's live by 1
                this.lives --
                
            //Check if the obstacle is off the screen (on the left)    

            } else if(cat.right > this.width){
                cat.element.remove()
                this.cats.splice(i, 1)

            }

        }  

        for (let i=0; i < this.cups2.length; i++){
            const cup2 = this.cups2[i]
            //cup2.move()
            


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
            
            
            //Check if the player collided with an obstacle
            if (this.player.didCollide(trash)){
                //remove the obstacle from the DOM
                trash.element.remove()     

                //remove obstacle from the array
                this.trashes.splice(i, 1)

                
                //collision sound effect
                this.obstAudio.play()
                //reduce player's live by 1
                this.lives --
                
 
            } 

        }  
        for (let i=0; i < this.trashes2.length; i++){
            const trash2 = this.trashes2[i]
            //trash2.move()
            


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

                //collision sound effect
                this.starAudio.play()

                //increase timer by 3s
                this.timer+=3
            
            //check if the obstacle is off the screen(bottom)
 
            } else if(bStar.top > this.height){
                bStar.element.remove()
                this.bstars.splice(i, 1)

            }

        } 

        //obstacle red star(live bonus)

        for (let i=0; i < this.rstars.length; i++){
            const rStar = this.rstars[i]
            rStar.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(rStar)){
                //remove the obstacle from the DOM
                rStar.element.remove()     

                //remove obstacle from the array
                this.rstars.splice(i,1)

                
                //collision sound effect
                this.starRedAudio.play()

                //increase player's live by 1
                this.lives++

            //check if the obstacle is of the screen(bottom)  
 
            } else if(rStar.top > this.height){
                rStar.element.remove()
                this.rstars.splice(i, 1)

            }

        } 

        //obstacle Net(time deduction)

        for (let i=0; i < this.nets.length; i++){
            const net = this.nets[i]
            //net.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(net)){
                //remove the obstacle from the DOM
                net.element.remove()     

                //remove obstacle from the array
                this.nets.splice(i, 1)

                //collision sound effect
                this.netAudio.play()

                //reduce timer by 3
                this.timer -= 3
                
 
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

        if(!this.seagulls.length && !this.isPushingSeagull) {
            this.isPushingSeagull = true;
            setTimeout(()=>{
                this.seagulls.push(new Seagull(this.gameScreen))
                this.isPushingSeagull = false
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

        if(!this.rstars.length && !this.isPushingRstar) {
            this.isPushingRstar = true;
            setTimeout(()=>{
                this.rstars.push(new StarRed(this.gameScreen))
                this.isPushingRstar = false
            }, 9000)
        }

        if(!this.nets.length && !this.isPushingNet) {
            this.isPushingNet = true;
           
                this.nets.push(new Net(this.gameScreen))
                this.nets.push(new Net(this.gameScreen))
                this.nets.push(new Net(this.gameScreen))
                this.nets.push(new Net(this.gameScreen))
                this.isPushingNet = false
            
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

        //remove all obstacles from the array of obstacles
        this.obstacles.forEach(obstacle => {
            obstacle.element.remove()
        })
        
        this.obstacles =[]
        this.gameIsOver = true

        //hide the game screen

        this.gameScreen.style.display = 'none'

        //Show end game screen
        
        this.gameWinScreen.style.display = "block"
    }

}