let game

class Game {
    constructor() {
        this.scene = 'title'
        this.state = ''
        this.menu = 'false'

        this.canvas = document.getElemenyById('screen')
        this.ctx = this.cavnas.getContext('2d')

        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)
        this.frameCurrent = performance.now()
        this.framePrevious = performance.now()
        this.delta = 16
        this.gameLoop = requestAnimationFrame(() => this.loop())

        loop() {
            this.framePrevious = this.frameCurrent
            this.frameCurrent = performance.now()
            this.delta = this.frameCurrent - this.framePrevious
            this.gameLoop = requestAnimationFrame(() => this.loop())
        }

        keyDown(event) {
            let key = event.key

            if (this.scene === 'title') {

            }
        }

        keyUp(event) {
            let key = event.key

            if (this.scene === 'title') {

            }
        }
    }
}
