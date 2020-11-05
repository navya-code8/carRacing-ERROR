class Form{

    constructor(){

        this.input = createInput("Name");
        this.button = createButton("Start Game");
        this.greeting = createElement("h3")


    }

    hideElement(){

        this.button.hide()
        this.input.hide()
        this.greeting.hide()

    }

    display(){

     var title = createElement("h3");
     title.html("Car Racing Game");
     title.position(460,100);

     this.input.position(450, 150);
     this.button.position(480, 200);
    // console.log(input.value())
     
     this.button.mousePressed(function(){
        console.log(this.button)
        this.button.hide()
        this.input.hide()

        player.name = this.input.value();
        playerCount++
        player.update();
        player.updateCount(playerCount);
        
        this.greeting.html("Welcome to the Game, " +name)
        this.greeting.position(430,200); 
     })
    }


}