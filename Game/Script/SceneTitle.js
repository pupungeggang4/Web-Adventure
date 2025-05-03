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

    static keyDown(game, key) {
        if (key === 'ArrowDown' || key === 's') {
            game.cursor.title = (game.cursor.title + 1) % 2
        } else if (key === 'ArrowUp' || key === 'w') {
            game.cursor.title = (game.cursor.title + 1) % 2
        } else if (key === 'Enter') {
            if (game.cursor.title === 0) {
                game.scene = 'adventure'
                game.state = ''
            }
        }
    }

    static keyUp(game, key) {

    }
}
