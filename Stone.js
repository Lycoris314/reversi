class Stone {
    static BLACK = 0;
    static WHITE = 1;
    static EMPTY = -1;

    #color = Stone.EMPTY;
    #changableStone = [];
    #animationDelay = 0;

    setColor(color) {
        this.#color = color;
    }

    getColor() {
        return this.#color;
    }

    getChangebleStone() {
        return this.#changableStone;
    }

    setChangebleStone(array) {
        this.#changableStone = array;
    }

    getAnimationDelay() {
        return this.#animationDelay;
    }

    setAnimationDelay(m) {
        this.#animationDelay = m;
    }
}