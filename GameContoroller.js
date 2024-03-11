class GameController {
    #board;
    #gameView;

    //制限時間用
    #count;
    #timeLimit;
    #timeoutID;

    constructor() {
        this.#board = new Board();
        this.#gameView = new GameView();
    }

    putStone(x, y) {
        const bo = this.#board;

        const next = bo.putStone(x, y);

        if (!next) return;

        this.#gameView.redrawBoard(bo);

        this.#gameView.eraseSkip();

        this.#gameView.viewStoneNum(bo.getStoneNum());

        this.#count = this.#timeLimit + 1;


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

        //置く場所がないのでスキップ
        if (
            bo.getBoard().flat().every((elm) => {
                return elm.getChangebleStone()[bo.getTurn()].length === 0;
            })
        ) {
            this.#gameView.turnSkip(bo.getTurn());
            bo.turnChange();
            this.#gameView.redrawBoard(bo);

            //両者打てないので決着
            if (
                bo.getBoard().flat().every((elm) => {
                    return elm.getChangebleStone()[bo.getTurn()].length === 0;
                })
            ) {
                this.#gameView.result(bo);
                this.#gameView.eraseSkip();

                clearInterval(this.#timeoutID);

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

    timerReset() {
        clearInterval(this.#timeoutID);
        $(".timerStart").prop("disabled", "");
    }



    setTimer(time) {
        $(".timerStart").prop("disabled", "disabled");

        this.#timeLimit = time;
        this.#count = time;

        $(".timer").text(`残り${this.#count}秒`);

        this.#timeoutID =

            setInterval(() => {

                this.#count -= 1;

                $(".timer").text(`残り${this.#count}秒`);

                //時間切れ
                if (this.#count <= 0) {
                    clearInterval(this.#timeoutID);

                    const bw = this.#board.getTurn();
                    this.#gameView.timeoutResult(bw);

                    const bo = this.#board.getBoard();
                    bo.flat().forEach((elm) => {
                        elm.setChangebleStone([[], []]);
                    });

                    this.#gameView.redrawBoard(this.#board);
                }
            }, 1000);
    }
}

