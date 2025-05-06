class Render {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.fillStyle = 'white'
        ctx.clearRect(0, 0, 1280, 720)
        ctx.fillRect(0, 0, 1280, 720)
        ctx.fillStyle = 'black'
    }

    static renderMenu(ctx) {
        ctx.fillStyle = 'white'
        this.fillRectUI(ctx, UI.menu.rect)
        this.strokeRectUI(ctx, UI.menu.rect)
        ctx.fillStyle = 'black'

        this.fillTextUI(ctx, 'Paused', UI.menu.textPaused)
        this.strokeRectUI(ctx, UI.menu.buttonResume)
        this.fillTextUI(ctx, 'Resume [R]', UI.menu.textResume)
        this.strokeRectUI(ctx, UI.menu.buttonExit)
        this.fillTextUI(ctx, 'Exit [E]', UI.menu.textExit)
    }

    static strokeRectUI(ctx, rect) {
        ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillRectUI(ctx, rect) {
        ctx.fillRect(rect[0], rect[1], rect[2], rect[3])
    }

    static drawImageUI(ctx, img, rect) {
        ctx.drawImage(img, rect[0], rect[1])
    }

    static fillTextUI(ctx, text, pos) {
        ctx.fillText(text, pos[0], pos[1])
    }

    static renderImageCam(ctx, img, rect, cam) {
        ctx.drawImage(img, rect.position.x - cam.x - rect.size.x / 2, rect.position.y - cam.y - rect.size.y / 2)
    }
}
