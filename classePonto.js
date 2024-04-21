class Ponto {
    #x;
    #y;
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }
    get x() {
        return this.#x;
    }
    get y() {
        return this.#y;
    }
    set x(x){
        this.#x = x;
    }
    set y(y){
        this.#y = y;
    }
    distancia(p){
        return Math.sqrt((this.#x - p.x) ** 2 + (this.#y - p.y) ** 2);
    }
}

class Ponto3d extends Ponto {
    #z;

    constructor(x, y, z) {
        super(x, y);
        this.#z = z;
    }

    get z() {
        return this.#z;
    }

    set z(z){
        this.#z = z;
    }

    distancia (p){
            return Math.sqrt((this.x - p.x)**2 + (this.y - p.y)**2 + (this.#z - p.z)**2)
    }
    

}

export {Ponto, Ponto3d };