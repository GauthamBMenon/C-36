// Form: 
// Form should contain theinput box 
// and a button to log in.

// ● When the button is pressed, the player's
// name should be registered in the database 
// and a newplayer should be created

class Form {

    constructor() {
      
    }

    display(){
      var title = createElement ("h2")
      title.html("CAR CAPTAIN")
      title.position (130,0)
  

      
      var input = createInput("name")
      var button = createButton("play")
      input.position (130,160)
      button.position(250,200)
      
      
  
      button.mousePressed(function(){ 
        
        input.hide();
        button.hide();
  
        var name = input.value();
        
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);

        
        var greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(130, 160)
      });
  
    }
  }
