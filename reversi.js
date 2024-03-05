$(()=>{
    console.log("game-start");

    let game = new GameController();

    game.resetAll();


    $("td").on("click",function(){

        const x=$(this).attr("data-x");
        const y=$(this).attr("data-y");
        game.putStone(x,y);


    })

    $(".reset").on("click",()=>{

        game =new GameController();
        game.resetAll()
        
    })
})