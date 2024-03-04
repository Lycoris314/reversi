class Stone{
    static BLACK=0;
    static WHITE=1;
    static EMPTY=-1;

    #color=Stone.EMPTY;
    #changableStone=[];

    setColor(color){
        this.#color =color;
    }

    getColor(){
        return this.#color;
    }

    getChangebleStone(){
        return this.#changableStone;
    }

    setChangebleStone(array){
        this.#changableStone =array;
    }
}