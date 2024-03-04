class GameController{
    #board;
    #gameView;

    constructor(){
        this.#board = new Board();
        this.#gameView = new GameView();
    }

    putStone(x, y){
        this.#board.putStone(x,y);
        console.log(this.#board);
        this.#gameView.redrawBoard(this.#board);
    }

    resetAll(){
        this.#gameView.reset();
        this.#gameView.redrawBoard(this.#board);
        this.#gameView.redrawInfo();
    }
}