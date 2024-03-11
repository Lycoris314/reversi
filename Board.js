class Board {
    #board;
    #turn = Stone.BLACK;
    #turnNum = 1;
    #stoneNum = [2, 2];

    constructor() {

        this.#board = new Array(8).fill(null).map(ps => new Array(8).fill(null).map(p => new Stone()))
        this.#board[3][3].setColor(Stone.BLACK);
        this.#board[4][4].setColor(Stone.BLACK);
        this.#board[3][4].setColor(Stone.WHITE);
        this.#board[4][3].setColor(Stone.WHITE);

        this.setChangebleStones();

    }

    getBoard() {
        return this.#board;
    }

    getStoneNum() {
        return this.#stoneNum;
    }

    // changeStoneColor(x, y) {}

    putStone(x, y) {
        const stone = this.#board[x][y]
        const changeble = stone.getChangebleStone()[this.#turn]

        if (stone.getColor() !== Stone.EMPTY) {
            return false;

        } else if (changeble.length === 0) {
            return false;

        } else {
            this.#board[x][y].setColor(this.#turn);
            this.#board[x][y].setAnimationDelay(0);

            for (let elm of changeble) {

                this.#board[elm[0]][elm[1]].setColor(this.#turn);

                //置いた石との距離によってアニメーションの遅延を定める
                const m = Math.max(Math.abs(x - elm[0]), Math.abs(y - elm[1]));

                this.#board[elm[0]][elm[1]].setAnimationDelay(m);
            }

            this.turnChange();

            this.setChangebleStones();

            this.#turnNum += 1;

            this.#stoneNum[Stone.BLACK] =

                this.#board.flat().filter((elm) => {
                    return elm.getColor() === Stone.BLACK
                }).length;

            this.#stoneNum[Stone.WHITE] =

                this.#turnNum + 3 - this.#stoneNum[Stone.BLACK];

            return true;
        }
    }
    turnChange() {
        this.#turn = 1 - this.#turn;
    }

    getTurn() {
        return this.#turn;
    }

    getTurnNum() {
        return this.#turnNum;
    }

    setChangebleStones() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {

                //changebleなものをこれらに入れていく
                let arrBlack = [];
                let arrWhite = [];

                let stone = this.#board[i][j];
                stone.setChangebleStone([[], []]);

                if (stone.getColor() !== Stone.EMPTY) continue;

                function search(board, i, j, bw, dx, dy) {

                    let arr = [];

                    function helper(s) {

                        if (i + s * dx > 7 || i + s * dx < 0 || j + s * dy > 7 || j + s * dy < 0) {
                            arr = [];
                            return;
                        }
                        const color = board[i + s * dx][j + s * dy].getColor()

                        if (color === Stone.EMPTY) {
                            arr = [];
                            return;

                        } else if (color === 1 - bw) {

                            arr.push([i + s * dx, j + s * dy]);
                            helper(s + 1);

                        } else if (color === bw) {
                            return;
                        }
                    }

                    helper(1);

                    return arr;
                }

                const dxys = [
                    [-1, -1], [0, -1], [1, -1],
                    [-1, 0], [1, 0],
                    [-1, 1], [0, 1], [1, 1]
                ]

                for (let dxy of dxys) {

                    search(this.#board, i, j, Stone.BLACK, ...dxy)
                        .forEach((elm) => arrBlack.push(elm));

                    search(this.#board, i, j, Stone.WHITE, ...dxy)
                        .forEach((elm) => arrWhite.push(elm));
                }

                stone.setChangebleStone([arrBlack, arrWhite]);
            }
        }
    }

}
