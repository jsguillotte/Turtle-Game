class Seagull {
    constructor(gameScreen){
        this.gameScreen = gameScreen;

        //random position for the appearance of the obstacles
        this.left = Math.floor((Math.random()*800+100))

    

    //appear on top

    this.top = 0;
    this.width = 150;
    this.height = 100;

    //create the HTML element and default styling
    this.element = document.createElement('img')
    this.element.src = 'docs/images/seagull.png';
    this.element.style.position = 'absolute'
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
    this.element.style.height = `${this.height}px`
    this.element.style.width = `${this.width}px`

    this.gameScreen.appendChild(this.element)
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

    move(){
        this.top += 4;
        this.updatePosition()
    }



}

class Obstacle {
    constructor(gameScreen){
        this.gameScreen = gameScreen;

        //random position for the appearance of the obstacles
        this.top = Math.floor((Math.random()*500+100))

    

    //appear on the left

    this.left = 0;
    this.width = 100;
    this.height = 160;

    //create the HTML element and default styling
    this.element = document.createElement('img')
    this.element.src = 'docs/images/bossbaby.png';
    this.element.style.position = 'absolute'
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
    this.element.style.height = `${this.height}px`
    this.element.style.width = `${this.width}px`

    this.gameScreen.appendChild(this.element)
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

    move(){
        this.left += 3;
        this.updatePosition()
    }

}

class Dog {
    constructor(gameScreen){
        this.gameScreen = gameScreen;

        //random position for the appearance of the obstacles
        this.top = Math.floor((Math.random()*500+100))

    

    //appear on the left

    this.right = 0;
    this.width = 90;
    this.height = 130;

    //create the HTML element and default styling
    this.element = document.createElement('img')
    this.element.src = 'docs/images/dog.png';
    this.element.style.position = 'absolute'
    this.element.style.top = `${this.top}px`
    this.element.style.right = `${this.right}px`
    this.element.style.height = `${this.height}px`
    this.element.style.width = `${this.width}px`

    this.gameScreen.appendChild(this.element)
    }

    updatePosition(){
        this.element.style.right = `${this.right}px`
        this.element.style.top = `${this.top}px`
    }

    move(){
        this.right += 4;
        this.updatePosition()
    }



}

class Cat {
    constructor(gameScreen){
        this.gameScreen = gameScreen;

        //random position for the appearance of the obstacles
        this.top = Math.floor((Math.random()*500+100))

    

    //appear on the left

    this.right =  0;
    this.width = 90;
    this.height = 130;

    //create the HTML element and default styling
    this.element = document.createElement('img')
    this.element.src = 'docs/images/Cat.png';
    this.element.style.position = 'absolute'
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
    this.element.style.height = `${this.height}px`
    this.element.style.width = `${this.width}px`

    this.gameScreen.appendChild(this.element)
    }

    updatePosition(){
        this.element.style.right = `${this.right}px`
        this.element.style.top = `${this.top}px`
    }

   move(){
        this.right += 3;
        this.updatePosition()
    }
    
}

class Cup2 {
    constructor(gameScreen){
        this.gameScreen = gameScreen;

        //random position for the appearance of the obstacles
        this.top = Math.floor((Math.random()*500+100))
        this.right = Math.floor((Math.random()*800+100))

    

    //appear on the left

    
    this.width = 80;
    this.height = 100;

    //create the HTML element and default styling
    this.element = document.createElement('img')
    this.element.src = 'docs/images/cup.png';
    this.element.style.position = 'absolute'
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
    this.element.style.height = `${this.height}px`
    this.element.style.width = `${this.width}px`

    this.gameScreen.appendChild(this.element)
    }

    updatePosition(){
        this.element.style.right = `${this.right}px`
        this.element.style.top = `${this.top}px`
    }

   move(){
        this.left += 0;
        this.updatePosition()
    }
    
}

class Trash {
    constructor(gameScreen){
        this.gameScreen = gameScreen;

        //random position for the appearance of the obstacles
        this.top = Math.floor((Math.random()*500+100))
        this.right = Math.floor((Math.random()*800+100))

    

    //appear on the right

    
    this.width = 100;
    this.height = 60;

    //create the HTML element and default styling
    this.element = document.createElement('img')
    this.element.src = 'docs/images/Trash.png';
    this.element.style.position = 'absolute'
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
    this.element.style.height = `${this.height}px`
    this.element.style.width = `${this.width}px`

    this.gameScreen.appendChild(this.element)
    }

    updatePosition(){
        this.element.style.right = `${this.right}px`
        this.element.style.top = `${this.top}px`
    }

   move(){
        this.left += 0;
        this.updatePosition()
    }
    
}
class Trash2 {
    constructor(gameScreen){
        this.gameScreen = gameScreen;

        //random position for the appearance of the obstacles
        this.top = Math.floor((Math.random()*500+100))
        this.left=Math.floor((Math.random()*800+100))

    

    //appear on the left

   // this.left = 200;
   // this.right = 200;
    this.width = 100;
    this.height = 80;

    //create the HTML element and default styling
    this.element = document.createElement('img')
    this.element.src = 'docs/images/shoe.png';
    this.element.style.position = 'absolute'
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
    this.element.style.height = `${this.height}px`
    this.element.style.width = `${this.width}px`

    this.gameScreen.appendChild(this.element)
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

   move(){
        this.left += 0;
        this.updatePosition()
    }
    
}

class StarBlue {
    constructor(gameScreen){
        this.gameScreen = gameScreen;

        //random position for the appearance of the obstacles
        this.left = Math.floor((Math.random()*800+100))

    

    //appear on top

    this.top = 0;
    this.width = 50;
    this.height = 50;

    //create the HTML element and default styling
    this.element = document.createElement('img')
    this.element.src = 'docs/images/starfish.webp';
    this.element.style.position = 'absolute'
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
    this.element.style.height = `${this.height}px`
    this.element.style.width = `${this.width}px`

    this.gameScreen.appendChild(this.element)
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

    move(){
        this.top += 3;
        this.updatePosition()
    }



}

class StarRed {
    constructor(gameScreen){
        this.gameScreen = gameScreen;

        //random position for the appearance of the obstacles
        this.left = Math.floor((Math.random()*800+100))

    

    //appear on top

    this.top = 0;
    this.width = 50;
    this.height = 50;

    //create the HTML element and default styling
    this.element = document.createElement('img')
    this.element.src = 'docs/images/redStar.png';
    this.element.style.position = 'absolute'
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
    this.element.style.height = `${this.height}px`
    this.element.style.width = `${this.width}px`

    this.gameScreen.appendChild(this.element)
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

    move(){
        this.top += 3;
        this.updatePosition()
    }



}

class Net {
    constructor(gameScreen){
        this.gameScreen = gameScreen;

        //random position for the appearance of the obstacles
        this.left = Math.floor((Math.random()*800+150))
        this.top = Math.floor((Math.random()*600)+150)
        
        

    

    //appear on top

    
    this.width = 100;
    this.height = 100;

    //create the HTML element and default styling
    this.element = document.createElement('img')
    this.element.src = 'docs/images/net.png';
    this.element.style.position = 'absolute'
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
    this.element.style.height = `${this.height}px`
    this.element.style.width = `${this.width}px`

    this.gameScreen.appendChild(this.element)
    }

  updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }
/*
    move(){
        this.top += 0;
        this.updatePosition()
    }
*/


}