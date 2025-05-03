class SceneTitle {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Adventure Game', UI.title.textTitle)
        Render.fillTextUI(game.ctx, 'Start Game', UI.title.textStart)
        Render.fillTextUI(game.ctx, 'Erase Data', UI.title.textErase)
        Render.strokeRectUI(game.ctx, UI.title.cursorArrow[game.cursor.title])
    }

    static keyDown(game) {

    }

    static keyUp(game) {

    }
}
