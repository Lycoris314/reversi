$(() => {

    let game = new GameController();

    game.resetAll();

    //マスをクリック
    $("td").on("click", function () {

        const x = $(this).attr("data-x");
        const y = $(this).attr("data-y");

        game.putStone(x, y);
    })

    //盤面リセットをクリック
    $(".reset").on("click", () => {

        game.timerReset();

        game = new GameController();
        game.resetAll()
    })

    //拡大・縮小をクリック
    $(".scaleUp").on("click", () => {

        $("td").width($("td").width() + 5);
        $("td").height($("td").height() + 5);
    })
    $(".scaleDown").on("click", () => {

        $("td").width($("td").width() - 5);
        $("td").height($("td").height() - 5);
    })

    //タイマースタートをクリック
    $(".timerStart").on("click", () => {

        const timeLimit = $(".timeLimit").val();
        game.setTimer(timeLimit);
    })
})