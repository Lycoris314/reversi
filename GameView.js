class GameView {
    #boardTbody=[];

    constructor() {

        for (let i = 0; i < 8; i++) {
            this.#boardTbody[i]=[];
            for (let j = 0; j < 8; j++) {
                this.#boardTbody[i][j] = $(`td[data-x=${i}][data-y=${j}]`)
                //console.log(this.#boardTbody[i][j]);
            }
        }
    }

    redrawBoard(board) {
        const bo= board.getBoard()
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {

                this.#boardTbody[i][j].removeClass("canPut")
                
                switch(bo[i][j].getColor()){
                    case Stone.BLACK:
                        this.#boardTbody[i][j].addClass("black").removeClass("white");
                        break;
                    case Stone.WHITE:
                        this.#boardTbody[i][j].addClass("white").removeClass("black");
                        break;
                    case Stone.EMPTY:
                        if(bo[i][j].getChangebleStone()[board.getTurn()].length>0){
                        this.#boardTbody[i][j].addClass("canPut");
                        }

                }
            }
        }
        $(".turnNum").text(board.getTurnNum())
    }

    // redrawInfo(board, isPass) {

    // }

    result(board) {
            const bl = board.getStoneNum()[Stone.BLACK];
            const wh = board.getStoneNum()[Stone.WHITE];
            if(bl>wh){
                $(".outcome").text("黒の勝ちです！")
            }else if(bl<wh){
                $(".outcome").text("白の勝ちです！")
            }else{
                $(".outcome").text("引き分けです！")

            }
    }

    reset() {
        this.#boardTbody.flat().forEach(elm=>{
            elm.removeClass("white black")
        })

        $(".outcome").text("");
        $(".blackNum").text(2);
        $(".whiteNum").text(2);
        this.eraseSkip();
        this.viewTurn(Stone.BLACK);

        
    }

    turnSkip(turn){
        const c= turn==Stone.BLACK ? "黒":"白"
        $(".skip").text(`${c}の手番をスキップしました。`);
    }

    eraseSkip(){
        $(".skip").text("");
    }

    viewStoneNum(stoneNum){
        $(".blackNum").text(stoneNum[Stone.BLACK]);
        $(".whiteNum").text(stoneNum[Stone.WHITE]);
        
    }

    viewTurn(turn){
        const c= turn==Stone.BLACK ? "黒":"白"
        $(".turn").text(`${c}`);
    }
}