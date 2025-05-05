class SceneAdventure {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)

        game.field.render(game)

        if (game.menu === true) {
            Render.renderMenu(game.ctx)
        }
    }

    static keyDown(game, key) {

    }

    static keyUp(game, key) {

    }
}
