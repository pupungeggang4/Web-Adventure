class Game {
    constructor() {
        imageLoad()
        this.scene = 'title'
        this.state = ''
        this.menu = false

        this.cursor = {
            title: 0,
            menu: 0,
        }

        this.field = new Field()

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)
        this.frameCurrent = performance.now()
        this.framePrevious = performance.now()
        this.delta = 16
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.framePrevious = this.frameCurrent
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious

        if (this.scene === 'title') {
            SceneTitle.loop(this)
        } else if (this.scene === 'adventure') {
            SceneAdventure.loop(this)
        }

        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    keyDown(event) {
        let key = event.key

        if (this.scene === 'title') {
            SceneTitle.keyDown(this, key)
        } else if (this.scene === 'adventure') {
            SceneAdventure.keyDown(this, key)
        }
    }

    keyUp(event) {
        let key = event.key

        if (this.scene === 'title') {
            SceneTitle.keyUp(this, key)
        } else if (this.scene === 'adventure') {
            SceneAdventure.keyUp(this, key)
        }
    }
}
