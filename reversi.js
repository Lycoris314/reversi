$(()=>{
    console.log("start");
    let game = new GameController();

    game.resetAll();


    $("td").on("click",function(){
        console.log($(this).attr("data-x"));
        const x=$(this).attr("data-x");
        const y=$(this).attr("data-y");
        game.putStone(x,y);


    })
})