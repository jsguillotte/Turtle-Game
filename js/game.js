class Game {
    // a function that is going to be called any time that we create an object via class

    // it's useful to store all the properties that belong to the future object.
    constructor(){
        // get all the possible screens
        // game-screen and game-end are initially hidden
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end')

        // player
        this.player = new Player(
            this.gameScreen, 400, 700, 50, 75, "./images/turtle.png"
        );

        // style for the game board

        this.width = 1000
        this.height = 700

        // obstacles
        this.obstacles = []
        this.seagulls = []
        this.dogs = []
        this.cups = []
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
        this.isPushingCup = false
        this.isPushingTrash = false
        this.isPushingCup2 = false
        this.isPushingTrash2 = false
        this.isPushingBstar = false
        this.isPushingRstar = false
        this.isPushingNet = false
        

        //{trees: [], rocks: []}

        // score
        this.score = 3;

        // lives
        this.lives = 3;

        // gameOver flag
        this.gameOver = false;
    
    }

    start() {
        // Set the height and width of the game screen
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`

        // Hide the start Scren
        this.startScreen.style.display = 'none';

        //Show the Game Screen

        this.gameScreen.style.display = 'block'
        setInterval(()=>{
            return this.score--
        }, 1000)
        

        //Start the Game Loop
        this.gameLoop()
    }

    //Creating an Animation Function
    gameLoop(){
        console.log('Game Loop')

        //Check if the game's over to interrrups the game loop
        if(this.gameIsOver){
            return;
        }

        this.update()

       // this.frame ++;
      //console.log(this.frames)

    window.requestAnimationFrame(()=>this.gameLoop())

    } 

    update(){
        //Bonus: scores and lives

        let score = document.getElementById('timer')
        let lives = document.getElementById('lives')

        score.innerHTML = this.score
        lives.innerHTML = this.lives

        if(this.lives === 0 || this.score === 0) {
            this.endGame()
        }

        this.player.move()

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

                //reduce player's live by 1
                this.lives --
                

            }

            //Check if the obstacle is off the screen (at the bottom)

            else if(obstacle.left > this.width) {
                obstacle.element.remove()
                this.obstacles.splice(i, 1)

            } 

       

        }

       for (let i=0; i < this.seagulls.length; i++){
            const seagull = this.seagulls[i]
            seagull.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(seagull)){
                //remove the obstacle from the DOM
                seagull.element.remove()     

                //remove obstacle from the array
                this.seagulls.splice(i,1)

                //reduce player's live by 1
                this.lives --
                
 
            } else if(seagull.top > this.height){
                seagull.element.remove()
                this.seagulls.splice(i, 1)

            }

        }    


        for (let i=0; i < this.dogs.length; i++){
            const dog = this.dogs[i]
            dog.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(dog)){
                //remove the obstacle from the DOM
                dog.element.remove()     

                //remove obstacle from the array
                this.dogs.splice(i,1)

                //reduce player's live by 1
                this.lives --
                
 
            } else if(dog.right > this.width){
                dog.element.remove()
                this.dogs.splice(i, 1)

            }

        }  

        for (let i=0; i < this.cups.length; i++){
            const cup = this.cups[i]
            cup.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(cup)){
                //remove the obstacle from the DOM
                cup.element.remove()     

                //remove obstacle from the array
                this.cups.splice(i,1)

                //reduce player's live by 1
                this.lives --
                
 
            } /*else if(cup.right > cup.width){
                cup.element.remove()
                this.cups.splice(i, 1)

            }*/

        }  

        for (let i=0; i < this.cups.length; i++){
            const cup2 = this.cups2[i]
            cup2.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(cup2)){
                //remove the obstacle from the DOM
                cup2.element.remove()     

                //remove obstacle from the array
                this.cups2.splice(i,1)

                //reduce player's live by 1
                this.lives --
                
 
            } 

        }  

        for (let i=0; i < this.trashes.length; i++){
            const trash = this.trashes[i]
            trash.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(trash)){
                //remove the obstacle from the DOM
                trash.element.remove()     

                //remove obstacle from the array
                this.trashes.splice(i, 1)

                //reduce player's live by 1
                this.lives --
                
 
            } 

        }  
        for (let i=0; i < this.trashes2.length; i++){
            const trash2 = this.trashes2[i]
            trash2.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(trash2)){
                //remove the obstacle from the DOM
                trash2.element.remove()     

                //remove obstacle from the array
                this.trashes2.splice(i, 1)

                //reduce player's live by 1
                this.lives --
                
 
            } /*else if(trash.right > trash.width){
                trash.element.remove()
                this.trashes.splice(i, 1)

            } */

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

                //reduce player's live by 1
                this.score+=5
                
 
            } else if(bStar.top > this.height){
                bStar.element.remove()
                this.bstars.splice(i, 1)

            }

        } 

        for (let i=0; i < this.rstars.length; i++){
            const rStar = this.rstars[i]
            rStar.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(rStar)){
                //remove the obstacle from the DOM
                rStar.element.remove()     

                //remove obstacle from the array
                this.rstars.splice(i,1)

                //reduce player's live by 1
                this.lives++
                
 
            } else if(rStar.top > this.height){
                rStar.element.remove()
                this.rstars.splice(i, 1)

            }

        } 

        for (let i=0; i < this.nets.length; i++){
            const net = this.nets[i]
            net.move()
            


            //Check if the player collided with an obstacle
            if (this.player.didCollide(net)){
                //remove the obstacle from the DOM
                net.element.remove()     

                //remove obstacle from the array
                this.nets.splice(i, 1)

                //reduce player's live by 1
                this.score -= 3
                
 
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

        if(!this.cups.length && !this.isPushingCup) {
            this.isPushingCup = true;
            setTimeout(()=>{
                this.cups.push(new Cup(this.gameScreen))
                this.isPushingCup = false
            }, 100)
        }

        if(!this.cups2.length && !this.isPushingCup2) {
            this.isPushingCup2 = true;
            setTimeout(()=>{
                this.cups2.push(new Cup2(this.gameScreen))
                this.isPushingCup2 = false
            }, 100)
        }


       if(!this.trashes.length && !this.isPushingTrash) {
            this.isPushingTrash = true;
            setTimeout(()=>{
                this.trashes.push(new Trash(this.gameScreen))
                this.isPushingTrash = false
            }, 100)
        } 

        if(!this.trashes2.length && !this.isPushingTrash2) {
            this.isPushingTrash2 = true;
            setTimeout(()=>{
                this.trashes2.push(new Trash2(this.gameScreen))
                this.isPushingTrash2 = false
            }, 100)
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
            setTimeout(()=>{
                this.nets.push(new Net(this.gameScreen))
                this.isPushingNet = false
            }, 100)
        }




    }
    endGame(){
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
        this.gameEndScreen.style.display = "block"
    }

}