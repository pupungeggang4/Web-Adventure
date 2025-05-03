class Vector2D {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    transform(vec) {
        this.x += vec.x
        this.y += vec.y
    }

    scale(s) {
        this.x *= x
        this.y *= y
    }
}

class Rect2D {
    constructor(x, y, w, h) {
        this.position = new Vector2D(x, y)
        this.size = new Vector2D(w, h)
    }
}

class Circle2D {
    constructor(x, y, r) {
        this.position = new Vector2D(x, y)
        this.radius = r
    }
}
