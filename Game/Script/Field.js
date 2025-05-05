class Field {
    constructor() {
        this.background = 'cave'
        this.canvas = document.createElement('canvas')
        this.canvas.width = 1280
        this.canvas.height = 800
        this.ctx = this.canvas.getContext('2d')
    }

    handleTick(game) {

    }

    render(game) {
        game.ctx.drawImage(img.background[this.background], 0, 0)
    }
}
