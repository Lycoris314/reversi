class GameController {
    #board;
    #gameView;

    constructor() {
        this.#board = new Board();
        this.#gameView = new GameView();
    }

    putStone(x, y) {
        const bo = this.#board;

        const next = bo.putStone(x, y);

        if(!next) return;

        this.#gameView.redrawBoard(bo);

        this.#gameView.eraseSkip();

        this.#gameView.viewStoneNum(bo.getStoneNum());
        

        // if( bo.getTurnNum()>60 ){

        //     this.#gameView.result(bo);
        //     return;
        // }

        // const bl = bo.getStoneNum()[Stone.BLACK];
        // const wh = bo.getStoneNum()[Stone.WHITE];
        // if(bl==0 || wh==0){
        //     this.#gameView.result(bo);
        //     return;
        // }


        if (
            bo.getBoard().flat().every((elm) => {
                return elm.getChangebleStone()[bo.getTurn()].length == 0
            })
        ) { 
            this.#gameView.turnSkip(bo.getTurn());
            bo.turnSkip();
            this.#gameView.redrawBoard(bo);
            
            //両者打てない場合
            if (
                bo.getBoard().flat().every((elm) => {
                    return elm.getChangebleStone()[bo.getTurn()].length == 0
                })
            ){
                this.#gameView.result(bo);
                this.#gameView.eraseSkip();
                return;
            }
        }

        this.#gameView.viewTurn(bo.getTurn());


    }

    resetAll() {
        this.#gameView.reset();
        this.#gameView.redrawBoard(this.#board);


        //this.#gameView.redrawInfo();
    }
}