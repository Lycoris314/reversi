class Board {
    #board;
    #turn=Stone.BLACK;
    #turnNum=1;
    #stoneNum=[2,2];

    constructor() {

        this.#board = new Array(8).fill(null).map(ps => new Array(8).fill(null).map(p => new Stone()))
        this.#board[3][3].setColor(Stone.BLACK);
        this.#board[4][4].setColor(Stone.BLACK);
        this.#board[3][4].setColor(Stone.WHITE);
        this.#board[4][3].setColor(Stone.WHITE);


        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {

                let arrBlack = [];
                let arrWhite = [];

                let stone = this.#board[i][j];
                stone.setChangebleStone([[], []]);
                if (stone.getColor() != Stone.EMPTY) continue;

                let arr = [];

                function left(s, board, i, j, bw) {

                    if (i + s >= 8) {
                        arr = [];
                        return;
                    }
                    const color = board[i + s][j].getColor()

                    if (color == Stone.EMPTY) {
                        arr = [];
                        return;

                    } else if (color == 1 - bw) {
                        arr.push([i + s, j]);
                        left(s + 1, board, i, j);

                    } else if (color == bw) {
                        return;
                    }
                }
                left(1, this.#board, i, j, Stone.BLACK);
                arr.forEach((elm) => arrBlack.push(elm))
                arr = [];

                left(1, this.#board, i, j, Stone.WHITE);
                arr.forEach((elm) => arrWhite.push(elm))
                arr = [];



                function right(s, board, i, j, bw) {

                    if (i + s <= -1) {
                        arr = [];
                        return;
                    }
                    const color = board[i + s][j].getColor()

                    if (color == Stone.EMPTY) {
                        arr = [];
                        return;

                    } else if (color == 1 - bw) {
                        arr.push([i + s, j]);
                        right(s - 1, board, i, j);

                    } else if (color == bw) {
                        return;
                    }
                }
                right(-1, this.#board, i, j, Stone.BLACK);
                arr.forEach((elm) => arrBlack.push(elm))
                arr = [];

                right(-1, this.#board, i, j, Stone.WHITE);
                arr.forEach((elm) => arrWhite.push(elm))
                arr = [];


                function top(s, board, i, j, bw) {

                    if (j + s >= 8) {
                        arr = [];
                        return;
                    }
                    const color = board[i][j + s].getColor()

                    if (color == Stone.EMPTY) {
                        arr = [];
                        return;

                    } else if (color == 1-bw) {
                        arr.push([i, j + s]);
                        top(s + 1, board, i, j);

                    } else if (color == bw) {
                        return;
                    }
                }
                top(1, this.#board, i, j, Stone.BLACK);
                arr.forEach((elm) => arrBlack.push(elm))
                arr = [];

                top(1, this.#board, i, j, Stone.WHITE);
                arr.forEach((elm) => arrWhite.push(elm))
                arr = [];


                function bottom(s, board, i, j, bw) {

                    if (j + s <= -1) {
                        arr = [];
                        return;
                    }
                    const color = board[i][j + s].getColor()

                    if (color == Stone.EMPTY) {
                        arr = [];
                        return;

                    } else if (color == 1-bw) {
                        arr.push([i, j + s]);
                        bottom(s - 1, board, i, j);

                    } else if (color == bw) {
                        return;
                    }
                }
                bottom(-1, this.#board, i, j, Stone.BLACK);
                arr.forEach((elm) => arrBlack.push(elm))
                arr = [];

                bottom(-1, this.#board, i, j, Stone.WHITE);
                arr.forEach((elm) => arrWhite.push(elm))
                arr = [];


                //console.log(i, j, arrBlack);
                //console.log(i, j, arrWhite);
                stone.setChangebleStone([arrBlack, arrWhite]);

            }
        }
    }

    getBoard(){
        return this.#board;
    }

    getStoneNum() {
        return this.#stoneNum;
    }
    changeStoneColor(x, y) {

    }
    putStone(x, y) {
        const stone = this.#board[x][y]
        const changeble = stone.getChangebleStone()[this.#turn]

        if(stone.getColor()!=Stone.EMPTY){ 
            return false;
        }else if(changeble.length==0){
            return false;
        }else{
            this.#board[x][y].setColor(this.#turn);
            for(let elm of changeble){
                this.#board[elm[0]][elm[1]].setColor(this.#turn);
            }
            this.#turn=1- this.#turn;

            this.setChangebleStones();

            return true;

        }

    }
    turnSkip() {

    }

    setChangebleStones(){
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {

                let arrBlack = [];
                let arrWhite = [];

                let stone = this.#board[i][j];
                stone.setChangebleStone([[], []]);
                if (stone.getColor() != Stone.EMPTY) continue;

                let arr = [];

                function left(s, board, i, j, bw) {

                    if (i + s >= 8) {
                        arr = [];
                        return;
                    }
                    const color = board[i + s][j].getColor()

                    if (color == Stone.EMPTY) {
                        arr = [];
                        return;

                    } else if (color == 1 - bw) {
                        arr.push([i + s, j]);
                        left(s + 1, board, i, j, bw);

                    } else if (color == bw) {
                        return;
                    }
                }
                left(1, this.#board, i, j, Stone.BLACK);
                arr.forEach((elm) => arrBlack.push(elm))
                arr = [];

                left(1, this.#board, i, j, Stone.WHITE);
                arr.forEach((elm) => arrWhite.push(elm))
                arr = [];



                function right(s, board, i, j, bw) {

                    if (i + s <= -1) {
                        arr = [];
                        return;
                    }
                    const color = board[i + s][j].getColor()

                    if (color == Stone.EMPTY) {
                        arr = [];
                        return;

                    } else if (color == 1 - bw) {
                        arr.push([i + s, j]);
                        right(s - 1, board, i, j, bw);

                    } else if (color == bw) {
                        return;
                    }
                }
                right(-1, this.#board, i, j, Stone.BLACK);
                arr.forEach((elm) => arrBlack.push(elm))
                arr = [];

                right(-1, this.#board, i, j, Stone.WHITE);
                arr.forEach((elm) => arrWhite.push(elm))
                arr = [];


                function top(s, board, i, j, bw) {

                    if (j + s >= 8) {
                        arr = [];
                        return;
                    }
                    const color = board[i][j + s].getColor()

                    if (color == Stone.EMPTY) {
                        arr = [];
                        return;

                    } else if (color == 1-bw) {
                        arr.push([i, j + s]);
                        top(s + 1, board, i, j, bw);

                    } else if (color == bw) {
                        return;
                    }
                }
                top(1, this.#board, i, j, Stone.BLACK);
                arr.forEach((elm) => arrBlack.push(elm))
                arr = [];

                top(1, this.#board, i, j, Stone.WHITE);
                arr.forEach((elm) => arrWhite.push(elm))
                arr = [];


                function bottom(s, board, i, j, bw) {

                    if (j + s <= -1) {
                        arr = [];
                        return;
                    }
                    const color = board[i][j + s].getColor()

                    if (color == Stone.EMPTY) {
                        arr = [];
                        return;

                    } else if (color == 1-bw) {
                        arr.push([i, j + s]);
                        bottom(s - 1, board, i, j, bw);

                    } else if (color == bw) {
                        return;
                    }
                }
                bottom(-1, this.#board, i, j, Stone.BLACK);
                arr.forEach((elm) => arrBlack.push(elm))
                arr = [];

                bottom(-1, this.#board, i, j, Stone.WHITE);
                arr.forEach((elm) => arrWhite.push(elm))
                arr = [];


                //console.log(i, j, arrBlack);
                //console.log(i, j, arrWhite);
                stone.setChangebleStone([arrBlack, arrWhite]);

            }
        }
    }

}
