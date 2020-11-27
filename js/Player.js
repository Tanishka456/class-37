class Player {
  constructor(){
    this.index = null;//index of the player
    this.distance = 0;
    this. name = null;
  }

  getCount(){//to get the player count from database
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){// to update player count in the database
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){ //to update both name and distance of the player in the database
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name, 
      distance : this.distance
    });
  }

  static  getPlayerInfo(){
    // to get all the players information from the database
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value",(data)=>{

    
      allPlayers = data.val();

    })
  }

}
