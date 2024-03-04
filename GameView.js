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
                //console.log(bo);
                switch(bo[i][j].getColor()){
                    case Stone.BLACK:
                        this.#boardTbody[i][j].addClass("black").removeClass("white");
                        break;
                    case Stone.WHITE:
                        this.#boardTbody[i][j].addClass("white").removeClass("black");
                        break;
                }
            }
        }
    }

    redrawInfo(board, isPass) {

    }

    result(board) {

    }

    reset() {

    }
}